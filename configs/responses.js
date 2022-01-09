module.exports = {
	INCORRECT_ROUTE : { // Incorrect route response - 400
		code: -1,
		msg: 'Incorrect route ( Use /records/fetch)' 
	},
	INCORRECT_REQUEST_FIELDS: { // Incorrect Payload response - 400
		code: -1,
		msg: 'Please send required filters in correct format - startDate (YYYY-MM-DD), endDate (YYYY-MM-DD), minCount (Int) , maxCount (Int)'
	},
	SUCCESS_FETCH_RECORDS: { // Successful response - 200
		code: 0,
		msg: 'success',
		records: []
	},
	FAILURE_FETCH_RECORDS: { // Failure response - 500
		code: -1,
		msg: 'Error',
		records: []
	}
}