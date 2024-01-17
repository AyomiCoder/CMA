const jwt = require('jsonwebtoken');

const protectRoute = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'Unauthorized - No token provided' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Unauthorized - Invalid token' });
  }
};

module.exports = protectRoute;