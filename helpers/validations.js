const { fetch_records_required_fields, date_format_regex} = require('../configs/config');

/*
Function   : validateFetchRequest 
Description: Validate required fields and theie correct format
Parameters : Fields object
Return     : Return Boolean True/False
*/
exports.validateFetchRequest = function(body) {
	for(let i=0; i<fetch_records_required_fields.length; i++) {
		const field = fetch_records_required_fields[i]
		if(!body[field.key]) return false
		if(typeof body[field.key] !== field.type) return false
		if(typeof body[field.key] === 'string' && !body[field.key].match(date_format_regex)) return false
	}
	return true
}