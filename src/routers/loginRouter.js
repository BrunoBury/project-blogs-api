const express = require('express');

const router = express.Router();
const authController = require('../controllers/loginCont');
const validateFieldsMiddleware = require('../middleware/validateFieldsMid');

router.post('/login', validateFieldsMiddleware, authController.handleLogin);

module.exports = router;
