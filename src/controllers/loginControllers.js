const { User } = require('../models');
const generateToken = require('../utils/tokenGenerate');

const findUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = generateToken(user);
    console.log(token);
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  handleLogin,
};
