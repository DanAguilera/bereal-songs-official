const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'bereal-songs-official';

const authMiddleware = (req, res, next) => {
  // get the token from the request headers
  const token = req.headers.authorization?.split(' ')[1] || '';

  // verify the token
  try {
    const { data } = jwt.verify(token, secret);
    req.user = data;
  } catch (err) {
    console.error(err);
  }

  next();
};

const signToken = ({ email, username, _id }) => {
  const payload = { data: { email, username, _id } };
  const options = { expiresIn: '1d' };
  return jwt.sign(payload, secret, options);
};

module.exports = { authMiddleware, signToken };
