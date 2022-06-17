// ./controllers/indexController.js

// 1. CONTROLLERS

// exports.getHome = (req, res) => {

// 	res.json({
// 		msg: "Status activo"
// 	})

// }

exports.getHome = (req, res) => {

	res.json({
		"name": "Alan Ricardo Cruz Tamez",
		"position": "Full Stack Web Developer",
		"address": {
			"state": "Estado de Mexico",
			"city": "Atizapan"
		},
		"contact-info":{
			"email":"alan.cruz.tmz@gmail.com",
			"mobile":"55-1234-1234"
		},
		"summary": "Web developer with a civil engineering background.",
		"skills": [
			"HTML",
			"CSS",
			"Javascript"
		],
		"experience": [
			{
				"dates": "June 2022 - Current",
				"company": "EPAM",
				"position": "Junior Systems Engineer",
				"description": "GCP Program"
			},
			{
				"dates": "Nov 2019 - Dec 2022",
				"company": "Grupo Mexico",
				"position": "Construction Project Manager",
				"description": "Planning, executing, managing and monitoring construction sites."
			},
			{
				"dates": "May 2016 - Nov 2019",
				"company": "Grupo Mexico",
				"position": "Resident Engineer",
				"description": "Responsible for the development and quality of a construction site."
			}
		],
		"education":[ 
			{
			"date": "March 2022",
			"title": "Full Stack Web Development Bootcamp",
			"university": "Ironhack"
		},
			{
			"date": "May 2015",
			"title": "Bachelor in civil engineering",
			"university": "UNAM"
		}
	],
		"hobbies":[
			"cycling",
			"soccer",
			"traveling"
		]
	})

}