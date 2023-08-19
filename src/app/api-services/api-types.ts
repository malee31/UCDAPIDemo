export interface APILog {
	timestamp: number,
	log_type: string,
	message: string,
	related_data: string
}

export interface APICourse {
	crn: string,
	subject_code: string,
	subject_number: string,
	reserved: boolean
}
