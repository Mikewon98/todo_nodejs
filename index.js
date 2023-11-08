const { default: mongoose } = require("mongoose");
const app = require("./app");
const db = require("./config/db");
const UserModel = require("./model/user.model");
const TodoModel = require("./model/todo.model");

const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send(`Hello World!!`);
});

app.get("getUserTodoList/:userId", async function (req, res) {
  try {
    var todos = await TodoModel.findOne({ userId: req.params.userId });
    res.json(todos);
  } catch (e) {
    throw e;
  }
});

app.post("/api/signup", async (req, res) => {
  console.log(req.body);
  const newUser = new UserModel(req.body);
  try {
    await newUser.save();
    res.status(201).json({ newUser });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.listen(port, () => {
  console.log(`Server Listening on port http://localhost:${port}`);
});
