const express = require('express');
const router = express.Router();
const refreshTokenController = require('../controllers/refreshTokenController');

// router.post('/', authController.handleLogin);
router.route('/')
    .get(refreshTokenController.handleRefreshToken)


module.exports = router;