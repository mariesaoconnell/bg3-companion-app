db = require('./db');
helper = require('../helper');
const config = require('../config');

async function approvalsByAct(page = 1, act_id) {
	const offset = helper.getOffset(page, config.listPerPage);
	const query = `
SELECT dialogues.id AS dialogue_id,
       dialogues.dialogue,
       dialogues.dialogue_details,
       dialogues.additional_details,
       regions.region_name,
       regions.act,
       (SELECT GROUP_CONCAT(companion_name)
        FROM companions
        WHERE companion_id IN (
          SELECT reactions.companion_id
          FROM reactions
          WHERE reactions.dialogue_id = dialogues.id AND reactions.approves = 1
        )) AS all_approvals,
       (SELECT GROUP_CONCAT(companion_name)
        FROM companions
        WHERE companion_id IN (
          SELECT reactions.companion_id
          FROM reactions
          WHERE reactions.dialogue_id = dialogues.id AND reactions.disapproves = 1
        )) AS all_disapprovals
FROM dialogues
JOIN regions ON dialogues.region_id = regions.region_id
LEFT JOIN reactions ON reactions.dialogue_id = dialogues.id
WHERE regions.act = ${act_id}
GROUP BY dialogues.id
ORDER BY regions.act;`;

	const rows = await db.query(query);
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
