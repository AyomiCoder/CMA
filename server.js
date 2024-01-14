const express = require('express');
const errorHandler = require('./middleware/errorHandling');
const connectDb = require('./config/dbConnect');
const dotenv = require('dotenv').config()

connectDb()
const app = express()

const port = process.env.PORT || 8080

// middlewares
app.use(express.json());
app.use('/api/contacts', require("./routes/contactRoutes"));
app.use('/api/users', require("./routes/userRoutes"));
app.use(errorHandler)

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
});