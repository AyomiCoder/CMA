const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')


// @desc Register a user
// @route POST api/users/register
// @access public
const registerUser = asyncHandler( async (req, res) =>{
const {username, email, password} = req.body
if (!username || !email || !password){
res.status(400);
throw new Error("All fields are mandatory")
}

const userAvailable = await User.finOne({email});
if (userAvailable) {
res.status(400);
throw new Error("User already registered") 
}


res.json({message: "Register user"})
});

// @desc Login a user
// @route POST api/users/login
// @access public
const loginUser = asyncHandler( async (req, res) =>{
    res.json({message: "login user"})
});

// @desc Get current user
// @route GET api/users/current
// @access private
const currentUser = asyncHandler( async (req, res) =>{
    res.json({message: "current user"})
});

module.exports = {registerUser, loginUser, currentUser}