const express = require('express');
const router = express.Router();
const createUser = require('../controller/userController'); 

// Route to handle form submission
router.post('/signup', createUser); 

module.exports = router;


