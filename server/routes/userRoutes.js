// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const createUser = require('../controller/userController'); // Update import statement

// Route to handle form submission
router.post('/signup', createUser); // Use the imported function as the route handler

module.exports = router;


