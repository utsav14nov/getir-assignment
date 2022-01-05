const recordsService = require('../services/RecordsService')

/*
Function   : fetch 
Description: Fetch Records according to the filters sent in request
Parameters : request object (startDate,endDate,minCount,maxCount), responce object, next function
Return     : Response containing filtered records 
*/
exports.fetch = async function(req, res, next) {
	const records = recordsService.fetchRecords()
	return res.status(200).json({ 
  	code: 0,
  	msg: 'Incorrect route ( Use /records/fetch)',
  	records: [] 
  });
}