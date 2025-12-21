

const logger = require('../config/logger.config');
function authenticate(req, res, next) {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey || apiKey !== process.env.SARKARFLOW_API_KEY) {
      logger.warn('Unauthorized request blocked');
    return res.status(401).json({ message: 'Unauthorized request' });
  }

  next();
}

module.exports = authenticate;
