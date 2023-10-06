const express = require('express');

const router = express.Router();

const { createUser } = require('../controllers/usersControllers');
const { authenticateToken } = require('../middleware/validateToken');
const { getAllUsers } = require('../controllers/getAllUsers');
const {
  validateFields,
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('../middleware/validateFieldsMid');

const { getUserById } = require('../controllers/getUserById');

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

router.get(
  '/user/:id',
  authenticateToken,
  getUserById,
);
module.exports = router;