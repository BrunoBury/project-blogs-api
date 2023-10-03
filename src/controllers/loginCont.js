// controllers/authController.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const validateFields = require('../middleware/validateFieldsMid');

const getUserByEmail = async (email) => User.findOne({ where: { email } });

const generateToken = (user) =>
  jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
      algorithm: 'HS256',
    },
  );

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    validateFields(req, res, async () => {
      const user = await getUserByEmail(email);

      if (!user || user.password !== password) {
        return res.status(400).json({ message: 'Invalid fields' });
      }

      const token = generateToken(user);

      return res.status(200).json({ token });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  handleLogin,
};
