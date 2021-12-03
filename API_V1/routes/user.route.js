const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { updateUserSchema } = require('../middleware/validators/userValidator.middleware');


router.get('/', auth(), awaitHandlerFactory(userController.getAllUsers)); // localhost:3000/api/users
router.get('/id/:id', auth(), awaitHandlerFactory(userController.getUserById)); // localhost:3000/api/users/id/1
router.get('/username/:username', auth(), awaitHandlerFactory(userController.getUserByuserName)); // localhost:3000/api/users/usersname/oberthiau
router.get('/account', auth(), awaitHandlerFactory(userController.getCurrentUser)); // localhost:3000/api/users/account
router.put('/account', auth(), updateUserSchema, awaitHandlerFactory(userController.updateCurrentUser)); // localhost:3000/api/users/account
router.patch('/id/:id', auth(Role.Admin), updateUserSchema, awaitHandlerFactory(userController.updateUser)); // localhost:3000/api/users/id/1 , using patch for partial update
router.delete('/id/:id', auth(Role.Admin), awaitHandlerFactory(userController.deleteUser)); // localhost:3000/api/users/id/1


module.exports = router;