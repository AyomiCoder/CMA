const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async, (res, req, next) =>{
    let token;
    let authHeader = req.headers.authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) =>{
            if (err){
                res.status(401)
                throw new Error("User is not authorized")
            }
            req.user = decoded.user
        })
    }
})

module.exports = validateToken;