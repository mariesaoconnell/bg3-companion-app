db = require('./db');
helper = require('../helper');

async function createDialogue(dialogueOptions) {
	const connection = await db.getConnection();

	try {
		await connection.beginTransaction();
		const [result1,] = await connection.execute(
			`INSERT INTO dialogues (act_id, region_id, dialogue, dialogue_details, additional_details) VALUES (?, ?, ?, ?, ?)`,
			[
				dialogueOptions.act_id,
				dialogueOptions.region_id,
				dialogueOptions.dialogue,
				dialogueOptions.dialogue_details,
				dialogueOptions.additional_details,
			]
		);
		const insertedId = result1.insertId;

		const approvalArray = dialogueOptions.approve;
		const disapprovalArray = dialogueOptions.disapprove;


		if(approvalArray){
			for(const companion of approvalArray){
				await connection.execute(
					`INSERT INTO reactions (companion_id, dialogue_id, approves, disapproves) VALUES (?, ?, ?, ?)`,
					[companion, insertedId, 1, 0]
				)
			}
		}
		if(disapprovalArray){
			for(const companion of disapprovalArray){
				await connection.execute(
					`INSERT INTO reactions (companion_id, dialogue_id, approves, disapproves) VALUES (?, ?, ?, ?)`,
					[companion, insertedId, 0, 1]
				)
			}
		}

		await connection.commit()

	} catch(error) {
		await connection.rollback();
		throw error;
	}

}
module.exports = {
	createDialogue
};
