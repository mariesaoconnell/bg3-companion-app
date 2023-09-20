const express = require('express');
const router = express.Router();
const deleteApproval = require('../services/deleteApproval');

router.delete('/:companion_approval_id', async function (req, res, next) {
	try {
		res.json(
			await deleteApproval.deleteApproval(req.params.companion_approval_id)
		);
	} catch (err) {
		console.error(`Error while deleting approval.`, err.message);
		next(err);
	}
});

module.exports = router;
