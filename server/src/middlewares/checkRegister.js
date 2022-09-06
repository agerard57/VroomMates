const UsersModel = require("../models/users.model");

const checkDuplicateUser = (req, res, next) => {
  const email = req.body.email;
  UsersModel.findOne({
    "email.email_address": email,
  }).exec((err, user) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }
    next();
  });
};

const checkEmail = (req, res, next) => {
  const email = req.body.email;
  if (email === "") return res.status(204).json({ message: "Email is empty" });
  if (!email.includes("@")) {
    return res.status(400).json({ message: "Email is invalid" });
  }
  next();
};

const checkPassword = (req, res, next) => {
  const pwd = req.body.password1;
  /* Basically test if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,128}$/.test(pwd)) */

  // Test if password is between 8 and 128 characters long
  if (pwd.length < 8 || pwd.length > 128) {
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

const checkDifferentPasswords = (req, res, next) => {
  const pwd1 = req.body.password1;
  const pwd2 = req.body.password2;

  if (pwd1 !== pwd2) {
    return res.status(400).json({ message: "Passwords are different" });
  }
  next();
};

const checkRegister = {
  checkDuplicateUser,
  checkEmail,
  checkPassword,
  checkDifferentPasswords,
};

module.exports = checkRegister;
