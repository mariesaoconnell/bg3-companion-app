const express = require('express');
const router = express.Router();
const createDialogue = require('../services/createApproval');

router.post('/', async function(req, res, next) {

  const {act_id, region_id, dialogue, dialogue_details, additional_details, approve, disapprove} = req.body;

  if (!act_id || !region_id || !dialogue || !approve || !disapprove) {
    res.status(400).send('Required fields missing');
    return;
  }

try {
	const result = await createDialogue.createDialogue(req.body);
	res.status(201).json(result);
} catch (err) {
	console.error(`Error while adding Approval`, err.message);
	next(err);
}
});

module.exports = router;
