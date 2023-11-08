// require("dotenv").config();

// const express = require("express");
// const app = express();

// const mongoose = require("mongoose");

// const Todo = require("../model/todo.model");
// const User = require("../model/user.model");

// const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// mongoose.connect(mongoDbUrl).then(function () {
//   app.get("/", function (req, res) {
//     const response = { statuscode: res.statusCode, message: "API Works!" };
//     res.json(response);
//   });

//   const noteRouter = require("./routes/Note");
//   app.use("/notes", noteRouter);
// });
