const UserService = require("../services/user.services");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const successRes = await UserService.registerUser(email, password);

    res.json({ status: true, success: "User Registerd Successfully" });
  } catch (e) {
    throw e;
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // check if there is a registered user
    const user = await UserService.checkUserEmail(email);
    if (!user) {
      throw new Error("User doesn't exist");
    }

    // chceck if the passwords match
    const isMatch = user.comparePassword(password);
    if (isMatch == false) {
      throw new Error("Username or Password does not match");
    }

    let tokenData = { _id: user._id, email: user.email };

    const token = await UserService.generateToken(tokenData, "secretKey", "2d");

    res.status(200).json({ status: true, token: token });
  } catch (e) {
    throw e;
  }
};
