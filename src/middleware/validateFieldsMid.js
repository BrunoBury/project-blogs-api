const validateFields = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;

  if (!displayName || displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long' });
  }

  next();
};

module.exports = {
  validateFields,
  validateDisplayName,
  validateEmail,
  validatePassword,
};
