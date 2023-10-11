export interface APILog {
	timestamp: number,
	log_type: string,
	message: string,
	related_data: string
}

export interface APICrn {
	crn: string,
	subject_code: string,
	subject_number: string,
	reserved: boolean
}

export interface APISeats {
	crn: string,
	seats_available: number,
	seats_reserved: number,
	waitlist: number,
	timestamp: string,
	refresh_cycle_timestamp: string
}