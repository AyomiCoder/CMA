const express = require('express');
const {registerUser, loginUser, currentUser} = require('../controller/userController');
const validateToken = require('../middleware/validTokenHandler');
const router = express.Router()

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/current", validateToken).get(currentUser)

module.exports = router