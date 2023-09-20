const express = require('express');
const router = express.Router();
const companions = require('../services/companions');

router.get('/', async function(req,res,next) {
  try {
    res.json(await companions.getCompanions(req.query.page));
  } catch(err){
    console.error(`Error while getting companions: `, err.message);
    next(err)
  }
});


module.exports = router;
