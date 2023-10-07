const express = require('express');

const router = express.Router();

const { createCategory } = require('../controllers/categoriesContoller');
const { authenticateToken } = require('../middleware/validateToken');
const { getCategories } = require('../controllers/getCategories');

router.post(
  '/categories',
  authenticateToken,
  createCategory,
);

router.get(
  '/categories',
  authenticateToken,
  getCategories,
);

module.exports = router;