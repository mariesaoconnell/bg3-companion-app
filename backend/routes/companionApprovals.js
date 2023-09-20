const express = require('express');
const router = express.Router();
const companionApprovals = require('../services/companionApprovals');

router.get('/:companion_id', async function (req, res, next) {
	try {
		res.json(
			await companionApprovals.companionApprovals(
				req.query.page,
				req.params.companion_id
			)
		);
	} catch (err) {
		console.error(`Error while getting companions: `, err.message);
		next(err);
	}
});

module.exports = router;
