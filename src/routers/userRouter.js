const express = require('express');

const router = express.Router();

const { createUser } = require('../controllers/usersControllers');
const { authenticateToken } = require('../middleware/validateToken');
const { getAllUsers } = require('../controllers/getAllUsers');
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

router.get(
  '/user',
  authenticateToken,
  getAllUsers,
);
module.exports = router;