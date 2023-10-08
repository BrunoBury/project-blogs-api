const { PostCategory } = require('../models');

const validateRequiredFields = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateCategoriesExist = async (req, res, next) => {
  const { categoryIds } = req.body;
  try {
    const allCategoryIds = await PostCategory.findAll({ attributes: ['categoryId'] });
    const existingCategoryIds = allCategoryIds.map((category) => category.categoryId);
    const missingCategories = categoryIds.filter((id) => !existingCategoryIds.includes(id));
    if (missingCategories.length > 0) {
      return res.status(400).json({ 
        message: 'one or more "categoryIds" not found' });
    }
    next();
  } catch (error) {
    // console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  validateRequiredFields,
  validateCategoriesExist,
};
