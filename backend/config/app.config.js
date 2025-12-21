require('dotenv').config();

/**
 * Central application configuration
 */
const appConfig = {
  appName: 'SarkarFlow',
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3001,

  // SLA demo timer (milliseconds)
  demoSlaTimer: 2000
};

module.exports = appConfig;
