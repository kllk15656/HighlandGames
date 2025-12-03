const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// ------------------------
// TEST ROUTE (for Render)
// ------------------------
router.get('/test', (req, res) => {
  res.json({ message: "Auth route working on Render!" });
});

// Register
router.post('/register', authController.register);

// Login
router.post('/login', authController.login);

module.exports = router;
