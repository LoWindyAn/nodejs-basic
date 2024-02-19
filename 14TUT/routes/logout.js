const express = require('express');
const router = express.Router();
const logoutController = require('../controllers/logoutController');

// router.post('/', authController.handleLogin);
router.route('/')
    .get(logoutController.handleLogout)


module.exports = router;