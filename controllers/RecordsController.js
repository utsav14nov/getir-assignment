const recordsService = require('../services/RecordsService')
const validations = require('../helpers/validations')
const {INCORRECT_REQUEST_FIELDS,SUCCESS_FETCH_RECORDS} = require('../configs/responses');


/*
Function   : fetch 
Description: Fetch Records according to the filters sent in request
Parameters : request object (startDate,endDate,minCount,maxCount), responce object, next function
Return     : Response containing filtered records
*/
exports.fetch = async function(req, res, next) {
	const payload = req.body
	if(!validations.validateFetchRequest(payload)) {
		return res.status(400).json(INCORRECT_REQUEST_FIELDS);
	}
	const records = recordsService.fetchRecords(payload)
	return res.status(200).json(SUCCESS_FETCH_RECORDS);
}