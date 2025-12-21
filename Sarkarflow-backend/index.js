require('dotenv').config();
const appConfig = require('./config/app.config');

const express = require('express');
const app = express();

const routes = require('./api/routes');
const { initMotia } = require('./motia.config');

app.use(express.json());

// Register API routes
app.use('/api', routes);

// Initialize Motia workflows
initMotia();


app.listen(appConfig.port, () => {
  console.log(`🚀 ${appConfig.appName} running on port ${appConfig.port}`);
});
