const express = require('express');

const router = express.Router();
const authController = require('../controllers/loginControllers');
const { validateFields } = require('../middleware/validateFieldsMid');

router.post(
  '/login',
  validateFields,
  authController.handleLogin,
);

module.exports = router;
