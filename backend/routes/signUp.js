const express = require('express');
const router = express.Router();
const signUp = require('../services/signUp');

// router.signUp('/sign-up', async function(req, res, next){
//   try{

//   }catch(err){
//     console.error(`Error while signing up.`, err.message);
//     next(err);
//   }
// })

module.exports = router;
