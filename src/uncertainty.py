"""
=====================================================================
NOVEL COMPONENT: Dynamic Provenance-Weighted Covariance (DPWC) Model
=====================================================================

WHY THIS IS DIFFERENT FROM STANDARD PRACTICE:
Most collision-avoidance systems assign every tracked object a single,
mission-wide covariance model (or a static per-object one pulled straight
from a TLE's own error terms), regardless of:
  (a) which sensor / data source produced the observation
  (b) how long ago that observation was made ("staleness")
  (c) the physical size/trackability of the object (RCS class)

DPWC instead computes a *per-object, per-conjunction-event* covariance
matrix as a function of these three provenance signals, and grows it
forward in time using a physically-motivated decay model (uncertainty
compounds due to unmodeled drag / SRP forces, not just measurement noise).

This produces materially different (and more defensible) Probability-of-
Collision (Pc) values than treating all tracking data as equally trustworthy
-- which is the core claim you'd build a patent application around.

The exact functional form below (multiplicative sensor/RCS priors combined
with a super-linear time-growth exponent, in the RIC frame) is the specific,
describable "method" a patent claim would center on. You should iterate on
the functional form / calibrate constants against real conjunction data
before filing -- what's here is a working, testable first version.
=====================================================================
"""
import numpy as np

# --- Provenance priors (1-sigma, km, in RIC frame: Radial/In-track/Cross-track) ---
# These are illustrative starting points -- calibrate against real tracking
# accuracy studies (e.g. CARA, ESA conjunction data) before relying on them.
SENSOR_BASE_SIGMA_KM = {
    "LASER_RANGING": np.array([0.02, 0.05, 0.02]),
    "OPTICAL":        np.array([0.10, 0.30, 0.10]),
    "RADAR":          np.array([0.15, 0.50, 0.15]),
    "TLE_ONLY":       np.array([0.30, 1.50, 0.30]),  # no sensor metadata at all
}

RCS_SCALE_FACTOR = {
    "LARGE": 1.0,
    "MEDIUM": 1.4,
    "SMALL": 2.2,   # small/debris objects are harder to track precisely
    None: 1.8,      # unknown size -> conservative
}

# Time-growth model: sigma(t) = sigma_0 * (1 + GROWTH_RATE * age_hours) ** GROWTH_EXPONENT
# Super-linear (exponent > 1) reflects that unmodeled perturbations compound,
# not just accumulate linearly, on realistic timescales.
GROWTH_RATE = 0.02       # per hour
GROWTH_EXPONENT = 1.3


def provenance_sigma_ric(sensor: str, rcs_size: str, age_hours: float) -> np.ndarray:
    """
    Core DPWC function. Returns 1-sigma uncertainty (km) in RIC frame,
    as a function of data provenance instead of a fixed constant.
    """
    base = SENSOR_BASE_SIGMA_KM.get(sensor, SENSOR_BASE_SIGMA_KM["TLE_ONLY"])
    rcs_scale = RCS_SCALE_FACTOR.get(rcs_size, RCS_SCALE_FACTOR[None])
    growth = (1 + GROWTH_RATE * max(age_hours, 0)) ** GROWTH_EXPONENT
    return base * rcs_scale * growth


def ric_to_eci_rotation(position_km: np.ndarray, velocity_km_s: np.ndarray) -> np.ndarray:
    """Rotation matrix from RIC frame to ECI/TEME frame at a given state."""
    r_hat = position_km / np.linalg.norm(position_km)
    h = np.cross(position_km, velocity_km_s)
    c_hat = h / np.linalg.norm(h)          # cross-track (orbit normal)
    i_hat = np.cross(c_hat, r_hat)         # in-track
    # columns = RIC basis vectors expressed in ECI
    return np.column_stack([r_hat, i_hat, c_hat])


def covariance_matrix_eci(sensor: str, rcs_size: str, age_hours: float,
                            position_km: np.ndarray, velocity_km_s: np.ndarray) -> np.ndarray:
    """
    Full 3x3 position covariance matrix in the ECI/TEME frame, built from
    provenance-weighted RIC sigmas and rotated into the working frame used
    by the conjunction assessment module.
    """
    sigma_ric = provenance_sigma_ric(sensor, rcs_size, age_hours)
    cov_ric = np.diag(sigma_ric ** 2)
    R = ric_to_eci_rotation(position_km, velocity_km_s)
    return R @ cov_ric @ R.T


def combined_covariance(cov_a: np.ndarray, cov_b: np.ndarray) -> np.ndarray:
    """Combined uncertainty of the relative position vector (independent errors)."""
    return cov_a + cov_b
