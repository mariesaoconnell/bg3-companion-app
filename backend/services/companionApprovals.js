db = require('./db');
helper = require('../helper');
const config = require('../config');

async function companionApprovals(page = 1, companion_id) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(
		`SELECT companions.companion_name, reactions.approves, dialogues.dialogue, dialogues.dialogue_details, dialogues.additional_details
		FROM companions
		JOIN reactions ON companions.companion_id = reactions.companion_id
		JOIN dialogues ON reactions.dialogue_id = dialogues.id
		WHERE reactions.companion_id = ${companion_id} LIMIT ${offset}, ${config.listPerPage}`
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
