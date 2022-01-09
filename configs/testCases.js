// Test Cases for records controller
module.exports = {
	EMPTY_PAYLOAD: {},
	WITHOUT_STARTDATE: {
		"endDate": "2017-02-01",
		"minCount": 300,
		"maxCount": 400
	},
	WITHOUT_ENDDATE: {
		"startDate": "2017-01-01",
		"minCount": 300,
		"maxCount": 400
	},
	WITHOUT_MINCOUNT: {
		"startDate": "2017-01-01",
		"endDate": "2017-02-01",
		"maxCount": 400
	},
	WITHOUT_MAXCOUNT: {
		"startDate": "2017-01-01",
		"endDate": "2017-02-01",
		"minCount": 300
	},
	INCORRECT_DATEFORMAT: {
		"startDate": "01-01-2017",
		"endDate": "01-01-2017",
		"minCount": 300,
		"maxCount": 400
	},
	STRING_COUNT_TYPE: {
		"startDate": "2017-01-01",
		"endDate": "2017-02-01",
		"minCount": "300",
		"maxCount": "400"
	},
	CORRECT_PAYLOAD: {
		"startDate": "2017-01-01",
		"endDate": "2017-02-01",
		"minCount": 300,
		"maxCount": 400
	}
}