const express = require('express');
const router = express.Router();
const createDialogue = require('../services/createApproval');

router.post('/', async function(req, res, next) {
  const {act_id, region_id, dialogue, dialogue_details, additional_details} = req.body;

  if (!act_id || !region_id || !dialogue || !dialogue_details || !additional_details) {
    res.status(400).send('Required fields missing');
    return;
  }

  try {
    res.json(await createDialogue.createDialogue(req.body));

  } catch(err) {
    console.error(`Error while adding Approval`, err.message);
    next(err)
  }
});

module.exports = router;
