import { Component } from '@angular/core';
import { ChunkInterface } from "../chunk-interface";

@Component({
	selector: 'app-course-details-doc-chunk',
	templateUrl: './course-details-doc-chunk.component.html',
	styleUrls: ['./course-details-doc-chunk.component.scss']
})
export class CourseDetailsDocChunkComponent extends ChunkInterface {
	constructor() {
		super("course-details");
	}

	exampleResponse = JSON.stringify({
		"ok": true,
		"courses": [
			{
				"subject_code": "ECS",
				"subject_number": "012",
				"course_title": "Introduction to Media Computation",
				"units": 4,
				"description": "Introduction to key computational ideas necessary to understand and produce digital media. Fundamentals of programming are covered as well as analysis of how media are represented and transmitted in digital form. Aimed primarily at non-computer science students.",
				"prerequisites": "",
				"GE_credits": "Arts & Humanities (AH) or Science & Engineering (SE); Visual Literacy (VL).",
				"learning_activities": "Lecture 3 hour(s), Discussion/Laboratory 1 hour(s).",
				"grade_mode": "Letter.",
				"enrollment_restrictions": "",
				"credit_limit": "Only 2 units of credit for students that have taken ECS 010 or ECS 030 or .",
				"cross_listing": "CTS 012",
				"repeat_credit": ""
			},
			{
				"subject_code": "ECS",
				"subject_number": "017",
				"course_title": "Data, Logic, & Computing",
				"units": 4,
				"description": "Display, processing, and representation of information and data on a computer. Understanding and analyzing the digital representations of numbers, images, and sounds. Basic computer operations and their logic. Introduction to discrete mathematics in computer science, including propositional logic, proofs by induction, recursions, and counting. Introduction to algorithms. Uses of computers and their influence on society.",
				"prerequisites": "MAT 016A (can be concurrent) or MAT 017A (can be concurrent) or MAT 021A (can be concurrent).",
				"GE_credits": "Science & Engineering (SE); Quantitative Literacy (QL).",
				"learning_activities": "Lecture 3 hour(s), Discussion 1 hour(s).",
				"grade_mode": "Letter.",
				"enrollment_restrictions": "",
				"credit_limit": "Not open for credit to students who have completed course  or MAT108.",
				"cross_listing": "",
				"repeat_credit": ""
			}
		]
	}, null, "\t");
}
