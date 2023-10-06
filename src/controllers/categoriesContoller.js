const { Category } = require('../models');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    const newCategory = await Category.create({ name });
    return res.status(201).json({
      id: newCategory.id,
      name: newCategory.name,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createCategory,
};