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
	timestamp_local: string,
	// TODO: Remove extra data
	"id": number,
	"batch_timestamp": string
	"createdAt": string,
	"updatedAt": string
}
