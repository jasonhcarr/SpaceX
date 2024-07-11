export interface ICores {
    "core_serial": string;
    "flight": number;
    "block": number;
    "reused": boolean;
    "land_success": boolean;
    "landing_type": string;
    "landing_vehicle": string;
}

export interface IOrbitParams {
    "reference_system": string;
    "regime": string;
    "longitude": number;
    "semi_major_axis_km": string;
    "eccentricity": number;
    "periapsis_km": number;
    "apoapsis_km": number;
    "inclination_deg": number;
    "period_min": number;
    "lifespan_years": number;
    "epoch": string;
    "mean_motion": number;
    "raan": number;
}

export interface IPayloads {
    "payload_id": string;
    "norad_id": number[];
    "reused": boolean;
    "customers": string[];
    "nationality": string;
    "manufacturer": string;
    "payload_type": string;
    "payload_mass_kg": number;
    "payload_mass_lbs": number;
    "orbit": string;
    "orbit_params": IOrbitParams;
}

export interface IFairings {
    "reused": boolean;
    "recovery_attempt": boolean;
    "recovered": boolean;
    "ship": string | null;
}

export interface IRocket {
    "rocket_id": string;
    "rocket_name": string;
    "rocket_type": string;
    "first_stage": {
        "cores": ICores[];
    },
    "second_stage": {
        "block": number;
        "payloads": IPayloads[];
    },
    "fairings": IFairings;
}

export interface IReuse {
    "core": boolean;
    "side_core1": boolean;
    "side_core2": boolean;
    "fairings": boolean;
    "capsule": boolean;
}

export interface ILaunchSite {
    "site_id": string;
    "site_name": string;
    "site_name_long": string;
}

export interface ILinks {
    "mission_patch": string;
    "mission_patch_small": string;
    "reddit_campaign": string;
    "reddit_launch": string;
    "reddit_recovery": string | null;
    "reddit_media": string;
    "presskit": string;
    "article_link": string;
    "wikipedia": string;
    "video_link": string;
}

export interface ILaunch {
    "flight_number": number;
    "mission_name": string;
    "launch_year": string;
    "launch_date_unix": number;
    "launch_date_utc": string;
    "launch_date_local": string;
    "rocket": IRocket;
    "telemetry": {
        "flight_club": string | null;
    },
    "reuse": IReuse;
    "launch_site": ILaunchSite;
    "launch_success": boolean;
    "links": ILinks;
    "details": string;
    "upcoming": boolean;
    "static_fire_date_utc": string;
}
