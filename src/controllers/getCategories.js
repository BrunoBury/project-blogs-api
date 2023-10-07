const { Category } = require('../models');

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    
    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getCategories,
};