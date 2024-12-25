const express = require("express")
const rateLimit = require("express-rate-limit")
const xss = require('xss-clean')
const helmet = require("helmet")
const hpp = require('hpp');
const cors = require("cors")
const mongoSanitize = require('express-mongo-sanitize');
const mongoose = require('mongoose');
require('dotenv').config()


const app = new express();



// Using rate limit middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});
app.use(limiter);



// Using helmet for secure http response

app.use(helmet())

// Using xss-clean sanitize for body query params

app.use(xss())

// Using hpp for protect against HTTP Parameter Pollution attacks query req.body params

app.use(hpp())

// Using cors for enabling CORS
app.use(cors())



// Using MongoSanitize for sanitize user input

app.use(mongoSanitize())


// Using cookie parser for set cookie



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("server run successfully");
});


const dbPort = process.env.DB_URL

mongoose.connect(dbPort).then((res) => {
    console.log(`--Database connect--`)
}).catch((error) => {
    console.log(`--Database connection failed-- ${error}`)
});

const router = require("./src/routes/api");

app.use("/api/v1", router);







module.exports = app