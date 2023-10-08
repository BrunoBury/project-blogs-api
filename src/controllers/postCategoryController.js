const { PostCategory, BlogPost } = require('../models');

const createPostCategory = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user.data.id;
  // console.log(req.user);
  // console.log(userId);
  try {
    const newPost = await BlogPost.create({
      title, content, userId, published: new Date(), updated: new Date() });
    const postCategories = categoryIds.map((categoryId) => ({
      postId: newPost.id,
      categoryId,
    }));
    await PostCategory.bulkCreate(postCategories);
    return res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createPostCategory,
};