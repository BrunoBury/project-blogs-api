const express = require('express');

const router = express.Router();

const { createCategory } = require('../controllers/categoriesContoller');
const { authenticateToken } = require('../middleware/validateToken');

router.post(
  '/categories',
  authenticateToken,
  createCategory,
);

module.exports = router;