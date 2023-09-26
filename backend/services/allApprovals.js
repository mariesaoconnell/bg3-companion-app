db = require('./db');
helper = require('../helper');
const config = require('../config');

async function allApprovals(page = 1) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(
		`SELECT * FROM dialogues LIMIT ${offset}, ${config.listPerPage}`
	);
	const data = helper.emptyOrRows(rows);
	const meta = { page };
	return {
		data,
		meta,
	};
}

module.exports = {
	allApprovals,
};
