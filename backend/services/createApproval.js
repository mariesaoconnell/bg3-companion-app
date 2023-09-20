db = require('./db');
helper = require('../helper');

async function createApproval(companionApproval) {

const result = await db.query(
	`INSERT INTO companion_approvals (details, companion_id, act_id) VALUES (?, ?, ?)`,
	[
		companionApproval.details,
		companionApproval.companion_id,
		companionApproval.act_id,
	]
);

	let message = 'Error in adding Approval';

	if (result.affectedRows) {
		message = 'Approval added successfully';
	}

	return {message};
}

module.exports = {
	createApproval
};
