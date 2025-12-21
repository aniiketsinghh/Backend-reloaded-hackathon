const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/auth.middleware');
const { createComplaint } = require('./complaint.controller');

// Complaint submission route
router.post('/complaints',authenticate,createComplaint);

module.exports = router;
