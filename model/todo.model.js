const mongoose = require("mongoose");
const db = require("../config/db");
const UserModel = require("../model/user.model");

const todoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: UserModel.modelName,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel;
