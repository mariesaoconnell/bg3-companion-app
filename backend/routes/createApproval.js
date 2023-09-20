const express = require('express');
const router = express.Router();
const createApproval = require('../services/createApproval');

router.post('/', async function(req, res, next) {
  const {details, companion_id, act_id} = req.body;

  console.log('From /routes.. Req Body: ', req.body)

  if (!details || !companion_id || !act_id) {
    res.status(400).send('Required fields missing');
    return;
  }

  try {
    res.json(await createApproval.createApproval(req.body));

  } catch(err) {
    console.error(`Error while adding Approval`, err.message);
    next(err)
  }
});

module.exports = router;
