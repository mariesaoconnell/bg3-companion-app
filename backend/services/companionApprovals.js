db = require('./db');
helper = require('../helper');
const config = require('../config');

async function companionApprovals(page = 1, companion_id) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(
		`SELECT * FROM companion_approvals WHERE companion_id = ${companion_id} LIMIT ${offset}, ${config.listPerPage}`
	);
	const data = helper.emptyOrRows(rows);
	const meta = { page };
	return {
		data,
		meta,
	};
}

module.exports = {
	companionApprovals,
};
