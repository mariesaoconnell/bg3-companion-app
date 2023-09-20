const express = require('express');
const router = express.Router();
const allApprovals = require('../services/allApprovals');

router.get('/', async function (req, res, next) {
	try {
		res.json(await allApprovals.allApprovals(req.query.page));
	} catch (err) {
		console.error(`Error while getting companions: `, err.message);
		next(err);
	}
});

module.exports = router;
