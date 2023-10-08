const express = require('express');

const router = express.Router();

const {
  createPostCategory,
} = require('../controllers/postCategoryController');
const {
  validateRequiredFields,
  validateCategoriesExist,
} = require('../middleware/validatePost');
const {
  authenticateToken,
} = require('../middleware/validateToken');

router.post(
  '/post',
  authenticateToken,
  validateCategoriesExist,
  validateRequiredFields,
  createPostCategory,
);

module.exports = router;