const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const db= mongoose.connect(process.env.MongoDB);
  mongoose.connection.on("error", (err) => {
    console.log("Connection failed");
  });
  mongoose.connection.on("connected", (connected) => {
    console.log("Connected with database......");
  });

  module.exports=db;