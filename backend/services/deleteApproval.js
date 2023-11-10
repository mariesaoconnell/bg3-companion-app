db = require('./db');
helper = require('../helper');

async function deleteApproval(dialogue_id) {
	let message = 'Error in deleting Approval.';

	try {
		// Delete from reactions table
		const reactionsResult = await db.query(
			`DELETE FROM reactions WHERE dialogue_id = ${dialogue_id}`
		);

		// Delete from dialogues table
		const dialoguesResult = await db.query(
			`DELETE FROM dialogues WHERE id = ${dialogue_id}`
		);

		// If both delete operations are successful
		if (reactionsResult.affectedRows && dialoguesResult.affectedRows) {
			message = 'Approval and related reactions deleted successfully';
		}
	} catch (error) {
		// Handle errors
		console.error('Error in deleteApproval:', error);
	}

	return { message };
}

module.exports = {
	deleteApproval,
};
