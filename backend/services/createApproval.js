db = require('./db');
helper = require('../helper');

async function createDialogue(dialogueOptions) {

const result = await db.query(
	`INSERT INTO dialogues (act_id, region_id, dialogue, dialogue_details, additional_details) VALUES (?, ?, ?, ?, ?)`,
	[
		dialogueOptions.act_id,
		dialogueOptions.region_id,
		dialogueOptions.dialogue,
		dialogueOptions.dialogue_details,
		dialogueOptions.additional_details,
	]
);

	let message = 'Error in adding Approval';

	if (result.affectedRows) {
		message = 'Approval added successfully';
	}

	return {message};
}

module.exports = {
	createDialogue
};
