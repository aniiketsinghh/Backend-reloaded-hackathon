require('dotenv').config();
const express = require('express');

const appConfig = require('./config/app.config');
const routes = require('./api/routes');
const { initMotia } = require('./motia/init');

const app = express();

app.use(express.json());

// Register API routes
app.use('/api', routes);

// Initialize Motia workflows
initMotia();

const port = process.env.PORT || appConfig.port;

app.listen(port, () => {
  console.log(`🚀 ${appConfig.appName} running on port ${port}`);
});
