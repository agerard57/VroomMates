const UsersModel = require("../models/users.model");
const bcrypt = require("bcryptjs");

const checkEmail = (req, res, next) => {
  const email = req.body.email;
  if (email === "") return res.status(204).json({ message: "Email is empty" });
  if (!email.includes("@")) {
    return res.status(400).json({ message: "Email is invalid" });
  }
  next();
};

const checkPasswordSyntax = (req, res, next) => {
  const pwd = req.body.password;
  // Test if password is between 8 and 124 characters long
  if (pwd.length < 8 || pwd.length > 124) {
    return res
      .status(400)
      .json({ message: "Password must be between 8 and 20 characters long" });
  }
  // Test if password contains at least one digit
  if (!pwd.match(/\d/)) {
    return res
      .status(400)
      .json({ message: "Password must contain at least one digit" });
  }
  // Test if password contains at least one lowercase or uppercase letter
  if (!pwd.match(/(?=.*[a-z])(?=.*[A-Z])/)) {
    return res.status(400).json({
      message:
        "Password must contain at least one lowercase and uppercase letter",
    });
  }
  // Test if password contains at least one special character
  if (!pwd.match(/[!@#$%^&*]/)) {
    return res.status(400).json({
      message: "Password must contain at least one special character",
    });
  }
  next();
};

const checkUserExistsAndValidPassword = (req, res, next) => {
  const email = req.body.email;

  UsersModel.findOne({
    "email.email_address": email,
  }).exec((err, user) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user) {
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid)
        return res.status(401).json({ message: "Password invalid." });
      next();
    }
  });
};

const checkLogin = {
  checkEmail,
  checkPasswordSyntax,
  checkUserExistsAndValidPassword,
};

module.exports = checkLogin;
