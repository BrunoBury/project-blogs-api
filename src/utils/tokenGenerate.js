const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
    
  const token = jwt.sign({ data: userId }, process.env.JWT_SECRET, jwtConfig);
    
  return token;
};

module.exports = generateToken;