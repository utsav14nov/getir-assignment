require('dotenv').config();

module.exports = {
	database_url : process.env.MONGO_URL, //Database Url
	database_name: process.env.DATABASE_NAME, // Database name
	fetch_records_required_fields: [{     // Validation fields for records fetch Api
		key:'startDate',
		type: 'string',
		format: 'YYYY-MM-DD'
	},{
		key:'endDate',
		type: 'string',
		format: 'YYYY-MM-DD'
	},{
		key:'minCount',
		type: 'number'
	},{
		key:'maxCount',
		type: 'number'
	}],
	date_format_regex: /^\d{4}([./-])\d{2}\1\d{2}$/  // Accepted Date format
}