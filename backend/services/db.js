const mysql = require('mysql2/promise');
const config = require('../config');

const pool = mysql.createPool(config.db);

async function query(sql, params) {
	const connection = await pool.getConnection();
	try {
		const [results] = await connection.execute(sql, params);
		return results;
	} finally {
		connection.release();
	}
}

async function getConnection() {
	return pool.getConnection();
}

module.exports = {
	query,
	getConnection,
};
