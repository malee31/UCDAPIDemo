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

export interface APIDegrees {
	identifier: string,
	name: string,
	degree_type: string
}

export interface APICourses {
	subject_code: string,
	subject_number: string,
	course_title: string,
	units: number,
	description: string,
	prerequisites: string,
	GE_credits: string,
	learning_activities: string,
	grade_mode: string,
	enrollment_restrictions: string,
	credit_limit: string,
	cross_listing: string,
	repeat_credit: string
}
