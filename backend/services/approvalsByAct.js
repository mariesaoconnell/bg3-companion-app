db = require('./db');
helper = require('../helper');
const config = require('../config');

async function approvalsByAct(page = 1, act_id) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(
		`SELECT * FROM dialogues WHERE act_id = ${act_id} LIMIT ${offset}, ${config.listPerPage}`
	);
	const data = helper.emptyOrRows(rows);
	const meta = { page };
	return {
		data,
		meta,
	};
}

module.exports = {
	approvalsByAct,
};
