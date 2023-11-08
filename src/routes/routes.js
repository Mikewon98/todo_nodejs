// const router = require("express").Router();

// const Todo = require("../model/todo.model");
// const User = require("../model/user.model");

// router.post("/getUserTodoList", async function (req, res) {
//   var todos = await Todo.find({ userid: req.body.userid });
//   res.json(todos);
// });

// router.post("/addTodo", async function (req, res) {
//   const createTodo = new Todo({
//     userId: req.body.id,
//     title: req.body.title,
//     description: req.body.content,
//   });
//   await createTodo.save();

//   const response = { message: "New ToDo Created! " + `id: ${req.body.id}` };
//   res.json(response);
// });

// router.post("/register", async function (req, res) {
//   const createTodo = new Todo({
//     email: req.body.email,
//     password: req.body.password,
//   });
//   await createUser.save();

//   const response = {
//     message: "New User Created! " + `email: ${req.body.email}`,
//   };
//   res.json(response);
// });

// router.post("/login", async function (req, res) {
//   await UserModel.findOne({ email });

//   const response = {
//     message: "New User Created! " + `email: ${req.body.email}`,
//   };
//   res.json(response);
// });
