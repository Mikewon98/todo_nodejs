require("dotenv").config();
const mongoose = require("mongoose");

const connection = mongoose
  .connect(process.env.mongoDbUrl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log(`Couldn't connect ${e}`);
  });

module.exports = connection;
