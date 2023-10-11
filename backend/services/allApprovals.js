db = require('./db');
helper = require('../helper');
const config = require('../config');

async function allApprovals(page = 1) {
const rows = await db.query(
    `SELECT companions.companion_name,
            reactions.approves,
            reactions.disapproves,
            dialogues.dialogue,
            dialogues.dialogue_details,
            dialogues.additional_details,
            regions.region_name,
            regions.act
     FROM companions
     JOIN reactions ON companions.companion_id = reactions.companion_id
     JOIN dialogues ON reactions.dialogue_id = dialogues.id
     JOIN regions ON dialogues.region_id = regions.region_id
     ORDER BY regions.act`
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
