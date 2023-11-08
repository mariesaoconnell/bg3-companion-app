const express = require('express');
const router = express.Router();
const login = require('../services/login');

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const token = await login(email, password);
    res.json({ token });
    console.log('Logged in!');

  } catch (err){
    res.status(401).json({ error: 'Invalid email or password' });
  }
});

module.exports = router;
