const app= require('./app')
const connectDatabase = require('./config/database')
const dotenv = require('dotenv')
const cloudinary = require('cloudinary');


process.on("uncaughtException", err => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});

// config file
//if (process.env.NODE_ENV !== "PRODUCTION")
// require("dotenv").config({ path: "backend/config/config.env" });
dotenv.config({path: 'backend/config/config.env'})

// dotenv.config({ path: 'backend/config/config.env' })

//connectar a la database
connectDatabase();

// Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server-ul s-a pornit pe PORT-ul: ${process.env.PORT} în modul de ${process.env.NODE_ENV} .`
  );
});


process.on("unhandledRejection", err => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down the server due to Unhandled Promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
