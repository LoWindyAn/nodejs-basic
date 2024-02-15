const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// router.post('/', authController.handleLogin);
router.route('/')
    .post(authController.handleLogin)
    .get(authController.getAllUser);



module.exports = router;