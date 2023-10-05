const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.user = user;
    next();
  });
};

module.exports = {
  authenticateToken,
};
