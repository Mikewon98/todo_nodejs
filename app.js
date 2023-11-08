const express = require("express");
const body_parser = require("body-parser");
const { required } = require("nodemon/lib/config");
const userRouter = require("./routers/user.router");
const TodoRouter = require("./routers/todo.router");

const app = express();

app.use(body_parser.json());

app.use("/", userRouter);

app.use("/", TodoRouter);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

module.exports = app;
