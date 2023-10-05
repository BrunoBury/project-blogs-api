const express = require('express');

const router = express.Router();

const { createUser } = require('../controllers/usersControllers');
// const { authenticateToken } = require('../middleware/validadeToken');
const { validateFields,
  validateDisplayName,
  validateEmail,
  validatePassword } = require('../middleware/validateFieldsMid');

router.post(
  '/user',
  validateFields,
  validateDisplayName,
  validateEmail,
  validatePassword,
  createUser,
);

module.exports = router;