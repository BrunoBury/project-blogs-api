const { User } = require('../models');
const generateToken = require('../utils/tokenGenerate');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'User already registered' });
    }
    const newUser = await User.create({ displayName, email, password, image });
    // console.log(newUser);
    
    const token = generateToken(newUser);

    return res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createUser,
};