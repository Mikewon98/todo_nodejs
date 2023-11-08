const mongoose = require("mongoose");
const db = require("../config/db");
const bcrypt = require("bcrypt");

// const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: [true, "userName can't be empty"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

userSchema.pre("save", async function () {
  var user = this;
  if (!user.isModified("password")) {
    return;
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  } catch (err) {
    throw err;
  }
});

userSchema.methods.comparePassword = async function (userPassword) {
  try {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
  } catch (e) {
    throw e;
  }
};

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
