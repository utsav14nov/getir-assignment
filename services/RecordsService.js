var DbConnection = require('./../database');

/*
Function   : fetchRecords 
Description: Fetch Records according to the filters sent
Parameters : filters object (startDate,endDate,minCount,maxCount)
Return     : Response containing filtered records in array
*/
exports.fetchRecords = async function(filters) {
	let startDateTime = new Date(filters['startDate'])
	startDateTime.setHours(0,0,0,0)
	let endDateTime = new Date(filters['endDate'])
	endDateTime.setHours(24,0,0,0)

	try {
		const db = await DbConnection.Get();
		const records = db.collection("records");

		const cursor = records.aggregate([
		{
			"$project": {
				"key": 1,
				"createdAt" : 1,
				"totalCount": {
					"$sum" : "$counts"
				}
			}
		},
		{
			"$match" : {
				"createdAt" : {
					$gte: startDateTime,
					$lt:  endDateTime
				},
				"totalCount" : {
					$gte : filters['minCount'],
					$lte : filters['maxCount']
				}
			}
		}],{});

		let result = []
		for await (const doc of cursor) {
			delete doc._id
			result.push(doc)
		}
		return result
	} catch (e) {
		throw e;
	}
}