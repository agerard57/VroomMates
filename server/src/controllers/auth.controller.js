const UsersModel = require("../models/users.model");
const bcrypt = require("bcryptjs");

exports.register = (req, res) => {
  const user = new UsersModel({
    name: req.body.name,
    "email.email_address": req.body.email,
    password: bcrypt.hashSync(req.body.password1, 8),
    address: req.body.address,
    birth_date: req.body.birthDate,
  });

  user.save((err, _user) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.status(200).json({ message: "User registered successfully" });
  });
};

exports.login = (req, res) => {
  const remember =
    req.body.remember === "remember-me"
      ? encodeURIComponent("true")
      : encodeURIComponent("false");
  console.log(remember);
  res.status(200).json({ message: "User successfully logged" });
};

// TODO ADD MAIL SENDING
