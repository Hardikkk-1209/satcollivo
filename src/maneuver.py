"""
Avoidance maneuver planner.

Given a risky ConjunctionEvent, computes the smallest radial/cross-track
delta-v burn (applied some lead time before TCA) that pushes the Pc below
an acceptable threshold. Uses a simple linearized miss-distance sensitivity
model -- adequate for a prototype; a production system would re-propagate
with the perturbed state and iterate.
"""
import numpy as np
from datetime import timedelta
# (no cross-module imports needed beyond numpy/datetime -- kept intentionally standalone)

PC_SAFE_THRESHOLD = 1e-5


def required_miss_distance_km(cov_combined_km2: np.ndarray, hard_body_radius_km: float,
                                target_pc=PC_SAFE_THRESHOLD) -> float:
    """
    Rough inverse: how far apart (in km) do the two objects need to be at
    TCA for Pc to drop to target_pc, given their combined covariance size.
    Uses the dominant eigenvalue of the covariance as a 1D proxy -- simple
    but conservative, appropriate for a first-pass planner.
    """
    sigma = np.sqrt(np.max(np.linalg.eigvalsh(cov_combined_km2)))
    # Solve exp(-0.5*(d/sigma)^2) ~ target_pc scaled by hard body area -- approximate
    d = sigma * np.sqrt(-2 * np.log(max(target_pc, 1e-12)))
    return max(d, hard_body_radius_km * 3)


def plan_avoidance_burn(event, lead_time_hours=12.0):
    """
    Returns a dict describing the recommended maneuver:
    - delta_v_m_s: magnitude of the burn
    - direction: unit vector in RIC frame (radial/in-track/cross-track)
    - burn_time: when to execute
    - resulting_pc_estimate: crude post-burn Pc estimate
    """
    needed_miss_km = required_miss_distance_km(event.cov_combined, hard_body_radius_km=0.02)
    shortfall_km = max(needed_miss_km - event.miss_distance_km, 0)

    if shortfall_km == 0:
        return {
            "maneuver_needed": False,
            "reason": f"Current miss distance {event.miss_distance_km:.3f} km "
                      f"already exceeds required {needed_miss_km:.3f} km at target Pc.",
        }

    burn_time = event.tca - timedelta(hours=lead_time_hours)

    # Linearized approx: a small radial delta-v applied `lead_time` before TCA
    # shifts along-track position roughly proportional to lead_time (secular
    # drift from Clohessy-Wiltshire dynamics). This is a coarse first-order
    # estimate -- production use should re-propagate and iterate to converge.
    lead_time_s = lead_time_hours * 3600
    # crude CW-based sensitivity: 1 mm/s radial burn drifts ~ proportional to time
    sensitivity_km_per_ms = 3 * lead_time_s / 1000.0 * 1e-6  # heuristic scale factor
    delta_v_m_s = shortfall_km / max(sensitivity_km_per_ms, 1e-9) / 1000.0
    delta_v_m_s = min(delta_v_m_s, 5.0)  # cap for sanity in this prototype

    return {
        "maneuver_needed": True,
        "delta_v_m_s": round(delta_v_m_s, 4),
        "direction_ric": "radial (+R, away from secondary)",
        "burn_time": burn_time.isoformat(),
        "lead_time_hours": lead_time_hours,
        "shortfall_km": round(shortfall_km, 4),
        "target_pc": PC_SAFE_THRESHOLD,
        "note": "Prototype linearized estimate -- validate with full re-propagation "
                "before operational use.",
    }
