const ToDoServices = require("../services/todo.services");

exports.createTodo = async (req, res, next) => {
  try {
    const { userId, title, description } = req.body;

    let todo = await ToDoServices.createTodo(userId, title, description);

    res.json({ status: true, success: todo });
  } catch (e) {
    throw e;
  }
};

exports.getUserTodo = async (req, res, next) => {
  try {
    const { userId } = req.body;

    let todo = await ToDoServices.getTodoData(userId);

    res.json({ status: true, success: todo });
  } catch (e) {
    throw e;
  }
};
