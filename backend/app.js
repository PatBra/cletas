const express = require("express");
const app = express();

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cloudinary = require ('cloudinary')

const errorMiddleware = require("./middlewares/errors");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

// configuracion Cloudinary
cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

//rutas 
const products = require("./routes/product");
const auth = require("./routes/auth");

app.use("/api/v1", products);
app.use("/api/v1", auth);

app.use(errorMiddleware);

module.exports = app;
