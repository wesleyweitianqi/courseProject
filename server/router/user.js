const express= require('express');
const router = express.Router();
const { registerController, loginController} = require('../controllers/userController')
const userSchema = require('../utils/check');
const expressJoi = require('@escook/express-joi');

router.post('/register', expressJoi(userSchema), registerController)
router.post('/login', expressJoi(userSchema), loginController)

module.exports = router;