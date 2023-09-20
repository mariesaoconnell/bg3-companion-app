const express = require('express');
const router = express.Router();
const approvalsByAct = require('../services/approvalsByAct');

router.get('/:act_id', async function (req, res, next) {
	try {
		res.json(await approvalsByAct.approvalsByAct(req.query.page, req.params.act_id));
	} catch (err) {
		console.error(`Error while getting companions: `, err.message);
		next(err);
	}
});

module.exports = router;
