const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { createUserSchema, validateLogin } = require('../middleware/validators/userValidator.middleware');


router.post('/signup', createUserSchema, awaitHandlerFactory(userController.createUser)); // localhost:3000/api/auth/signup
router.post('/signin', validateLogin, awaitHandlerFactory(userController.userLogin)); // localhost:3000/api/auth/signin

module.exports = router;