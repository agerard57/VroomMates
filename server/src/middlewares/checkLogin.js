/* eslint-disable consistent-return */
const bcrypt = require("bcryptjs");
const UsersModel = require("../models/users.model");

const checkEmail = (req, res, next) => {
  const { email } = req.body;
  if (email === "")
    return res.status(204).json({ message: "messages.error.email.empty" });
  if (!email.includes("@")) {
    return res.status(400).json({ message: "messages.error.email.invalid" });
  }
  next();
};

const checkPasswordSyntax = (req, res, next) => {
  const pwd = req.body.password;
  if (pwd === "")
    return res.status(204).json({ message: "messages.error.password.empty" });
  // Test if password is between 8 and 128 characters long
  if (pwd.length < 8 || pwd.length > 128) {
    return res.status(400).json({ message: "messages.error.password.length" });
  }
  // Test if password contains at least one digit
  if (!pwd.match(/\d/)) {
    return res.status(400).json({ message: "messages.error.password.digit" });
  }
  // Test if password contains at least one lowercase or uppercase letter
  if (!pwd.match(/(?=.*[a-z])(?=.*[A-Z])/)) {
    return res.status(400).json({
      message: "messages.error.password.lowerAndUpper",
    });
  }
  // Test if password contains at least one special character
  if (!pwd.match(/[!@#$%^&*]/)) {
    return res.status(400).json({
      message: "messages.error.password.special",
    });
  }
  next();
};

const checkUserExistsAndValidPassword = (req, res, next) => {
  const { email } = req.body;

  UsersModel.findOne({
    "email.email_address": email,
  }).exec((err, user) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (!user) {
      return res.status(404).json({ message: "messages.error.user.notFound" });
    }
    if (user) {
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid)
        return res
          .status(401)
          .json({ message: "messages.error.user.password" });
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
