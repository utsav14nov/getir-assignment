require('dotenv').config();

module.exports = {
	database_url : process.env.MONGO_URL, //Database Url
	fetch_records_required_fields: [{     // Validation fields for records fetch Api
		key:'startDate',
		type: 'string',
		format: 'YYYY-MM-DD'
	},{
		key:'endDate',
		type: 'string',
		format: 'YYYY-MM-DD'
	},{
		key:'startDate',
		type: 'number'
	},{
		key:'startDate',
		type: 'number'
	}],
	date_format_regex: /^\d{4}([./-])\d{2}\1\d{2}$/  // Accepted Date format
}