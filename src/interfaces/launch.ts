export interface ICores {
	'core': string;
	'flight': number;
	'gridfans': boolean;
	'landing_attempt': boolean;
	'land_success': boolean;
	'landing_type': string;
	'landpad': string;
	'legs': boolean;
	'reused': boolean;
}

export interface IFairings {
	'reused': boolean;
	'recovery_attempt': boolean;
	'recovered': boolean;
	'ships': string[];
}

export interface ILinks {
	'article': string;
	'flickr': {
		'original': string[];
		'small': string[];
	};
	'patch': {
		'large': string;
		'small': string;
	};
	'presskit': string;
	'reddit': {
		'campaign': string;
		'launch': string;
		'media': string;
		'recovery': string;
	};
	'webcast': string;
	'wikipedia': string;
	'youtube_id': string;
}

export interface ILaunch {
	'auto_update': boolean;
	'capsules': string[];
	'cores': ICores[];
	'crew': string[];
	'date_local': string;
	'date_precision': string;
	'date_unix': number;
	'date_utc': string;
	'details': string;
	'failures': string[];
	'fairings': IFairings[];
	'flight_number': number;
	'id': string;
	'launch_library_id': string;
	'launch_year'?: string;
	'launchpad': string;
	'links': ILinks;
	'name': string;
	'net': boolean;
	'payloads': string[];
	'rocket': string;
	'ships': string[];
	'success': boolean;
	'tbd': boolean;
	'upcoming': boolean;
	'window': number;
}
