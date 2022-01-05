var DbConnection = require('./../database');

/*
Function   : fetchRecords 
Description: Fetch Records according to the filters sent
Parameters : filters object (startDate,endDate,minCount,maxCount)
Return     : Response containing filtered records in array
*/
exports.fetchRecords = async function(filters) {
	try {
    let db = await DbConnection.Get();
    return [];
	} catch (e) {
	   return e;
	}
}