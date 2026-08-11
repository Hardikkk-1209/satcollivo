"""
Conjunction assessment: finds close approaches between a primary satellite
and all other tracked objects, and computes Probability of Collision (Pc)
using a Monte-Carlo-integrated Gaussian over the encounter, fed by DPWC's
provenance-weighted covariance.

Two changes from the flat-file prototype, now that we're on real data:
  1. Tracking "staleness" is computed from the object's *actual* TLE epoch
     vs. the assessment time, not a hand-set constant.
  2. A cheap altitude-band pre-filter runs before the expensive TCA search,
     since a real candidate list (e.g. CelesTrak's full debris catalog) can
     be thousands of objects -- most of which are nowhere near the primary's
     orbit and shouldn't hit the per-pair propagation loop at all.
"""
from datetime import datetime, timedelta, timezone
import numpy as np

from src.propagation import PropagatedObject
from src.uncertainty import covariance_matrix_eci, combined_covariance

EARTH_RADIUS_KM = 6378.137
MU_EARTH = 398600.4418  # km^3/s^2


class ConjunctionEvent:
    def __init__(self, primary, secondary, tca, miss_distance_km, pc, cov_combined):
        self.primary = primary
        self.secondary = secondary
        self.tca = tca
        self.miss_distance_km = miss_distance_km
        self.pc = pc
        self.cov_combined = cov_combined

    def __repr__(self):
        return (f"<Conjunction {self.primary.name} vs {self.secondary.name} "
                f"TCA={self.tca.isoformat()} miss={self.miss_distance_km:.3f}km "
                f"Pc={self.pc:.2e}>")


def _altitude_band_km(satrec):
    """Rough perigee/apogee altitude (km) from mean motion + eccentricity."""
    n_rad_s = satrec.no_kozai / 60.0  # mean motion: rev/min -> rad/s
    a = (MU_EARTH / n_rad_s ** 2) ** (1 / 3)  # semi-major axis, km
    e = satrec.ecco
    perigee_alt = a * (1 - e) - EARTH_RADIUS_KM
    apogee_alt = a * (1 + e) - EARTH_RADIUS_KM
    return perigee_alt, apogee_alt


def _orbits_overlap(primary: PropagatedObject, secondary: PropagatedObject, margin_km=100.0):
    p_perigee, p_apogee = _altitude_band_km(primary.satrec)
    s_perigee, s_apogee = _altitude_band_km(secondary.satrec)
    return not (p_apogee + margin_km < s_perigee or s_apogee + margin_km < p_perigee)


def tracking_age_hours(record: dict, at_time: datetime) -> float:
    """Hours between an object's TLE epoch and the assessment time -- real staleness."""
    epoch_str = record["epoch"]
    epoch = datetime.fromisoformat(epoch_str.replace("Z", "+00:00"))
    if epoch.tzinfo is None:
        epoch = epoch.replace(tzinfo=timezone.utc)
    if at_time.tzinfo is None:
        at_time = at_time.replace(tzinfo=timezone.utc)
    return abs((at_time - epoch).total_seconds()) / 3600.0


def find_tca(primary: PropagatedObject, secondary: PropagatedObject,
             start: datetime, end: datetime, coarse_step_s=30, fine_step_s=1):
    best_t, best_d = None, np.inf
    t = start
    while t <= end:
        p1, _ = primary.state_at(t)
        p2, _ = secondary.state_at(t)
        d = np.linalg.norm(p1 - p2)
        if d < best_d:
            best_d, best_t = d, t
        t += timedelta(seconds=coarse_step_s)

    if best_t is None:
        return None, np.inf

    window_start = best_t - timedelta(seconds=coarse_step_s)
    window_end = best_t + timedelta(seconds=coarse_step_s)
    t = window_start
    while t <= window_end:
        p1, _ = primary.state_at(t)
        p2, _ = secondary.state_at(t)
        d = np.linalg.norm(p1 - p2)
        if d < best_d:
            best_d, best_t = d, t
        t += timedelta(seconds=fine_step_s)

    return best_t, best_d


def probability_of_collision(miss_vector_km: np.ndarray, cov_combined_km2: np.ndarray,
                               hard_body_radius_km: float) -> float:
    try:
        inv_cov = np.linalg.inv(cov_combined_km2)
    except np.linalg.LinAlgError:
        return 0.0

    det_cov = np.linalg.det(cov_combined_km2)
    norm_const = 1.0 / ((2 * np.pi) ** 1.5 * np.sqrt(det_cov))

    def gaussian_3d(dx, dy, dz):
        v = np.array([dx, dy, dz]) - miss_vector_km
        return norm_const * np.exp(-0.5 * v @ inv_cov @ v)

    r = hard_body_radius_km
    n_samples = 20000
    rng = np.random.default_rng(42)
    pts = rng.uniform(-r, r, size=(n_samples, 3))
    inside = np.linalg.norm(pts, axis=1) <= r
    pts = pts[inside]
    vol_sphere = (4 / 3) * np.pi * r ** 3
    vals = np.array([gaussian_3d(*p) for p in pts])
    pc = vals.mean() * vol_sphere if len(vals) else 0.0
    return float(np.clip(pc, 0.0, 1.0))


def assess_conjunctions(primary: PropagatedObject, candidates: list,
                          start: datetime, end: datetime,
                          hard_body_radius_km=0.02,
                          screening_distance_km=25.0,
                          altitude_prefilter_margin_km=100.0) -> list:
    """
    Runs conjunction assessment for `primary` against every object in
    `candidates` over [start, end]. Returns ConjunctionEvent list sorted
    by descending Pc.

    Applies a cheap altitude-band pre-filter before the expensive per-pair
    TCA search -- essential once `candidates` is a real catalog slice
    (hundreds to thousands of objects) rather than a handful of test objects.
    """
    events = []
    skipped_by_prefilter = 0

    for sec in candidates:
        if sec.norad_id == primary.norad_id:
            continue

        if not _orbits_overlap(primary, sec, margin_km=altitude_prefilter_margin_km):
            skipped_by_prefilter += 1
            continue

        tca, miss_d = find_tca(primary, sec, start, end)
        if tca is None or miss_d > screening_distance_km:
            continue

        p1, v1 = primary.state_at(tca)
        p2, v2 = sec.state_at(tca)

        cov1 = covariance_matrix_eci(
            primary.record.get("sensor", "TLE_ONLY"),
            primary.record.get("rcs_size"),
            tracking_age_hours(primary.record, tca),
            p1, v1)
        cov2 = covariance_matrix_eci(
            sec.record.get("sensor", "TLE_ONLY"),
            sec.record.get("rcs_size"),
            tracking_age_hours(sec.record, tca),
            p2, v2)
        cov_combined = combined_covariance(cov1, cov2)

        miss_vector = p1 - p2
        pc = probability_of_collision(miss_vector, cov_combined, hard_body_radius_km)

        events.append(ConjunctionEvent(primary, sec, tca, miss_d, pc, cov_combined))

    events.sort(key=lambda e: e.pc, reverse=True)
    return events, skipped_by_prefilter
