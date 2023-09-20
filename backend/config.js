// CONTAINS CONFIGURATION INFORMATION LIKE DB CREDENTIALS AND ROWS WE WANT TO SHOW PER PAGE

const config = {
	db: {
		host: 'localhost',
		user: 'root',
    password: 'password',
    database: 'bg3_companion_db',
    connectTimeout: 60000
	},
  listPerPage: 10
};

module.exports = config;
