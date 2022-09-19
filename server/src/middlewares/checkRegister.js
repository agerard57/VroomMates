const UsersModel = require("../models/users.model");

checkFields = (req, res, next) => {
  const fields = [
    "last_name",
    "first_name",
    "email",
    "password1",
    "house_number",
    "street_name",
    "city",
    "zip",
    "state",
    "country",
    "birth_date",
  ];
  for (const field of fields) {
    if (req.body[field] === "") {
      return res.status(400).json({ message: `messages.error.${field}.empty` });
    }
  }
  next();
};

const checkDuplicateUser = (req, res, next) => {
  const email = req.body.email;
  UsersModel.findOne({
    "email.email_address": email,
  }).exec((err, user) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (user) {
      return res
        .status(409)
        .json({ message: "messages.error.user.alreadyExists" });
    }
    next();
  });
};

const checkEmail = (req, res, next) => {
  const email = req.body.email;
  if (!email.includes("@")) {
    return res.status(400).json({ message: "messages.error.email.invalid" });
  }
  next();
};

const checkPassword = (req, res, next) => {
  const pwd = req.body.password1;
  /* Basically test if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,128}$/.test(pwd)) */

  // Test if password is between 8 and 128 characters long
  if (pwd.length < 8 || pwd.length > 128) {
    return res.status(400).json({ message: "messages.error.password1.length" });
  }
  // Test if password contains at least one digit
  if (!pwd.match(/\d/)) {
    return res.status(400).json({ message: "messages.error.password1.digit" });
  }
  // Test if password contains at least one lowercase or uppercase letter
  if (!pwd.match(/(?=.*[a-z])(?=.*[A-Z])/)) {
    return res.status(400).json({
      message: "messages.error.password1.lowerAndUpper",
    });
  }
  // Test if password contains at least one special character
  if (!pwd.match(/[!@#$%^&*]/)) {
    return res.status(400).json({
      message: "messages.error.password1.special",
    });
  }
  next();
};

const checkDifferentPasswords = (req, res, next) => {
  const pwd1 = req.body.password1;
  const pwd2 = req.body.password2;

  if (pwd1 !== pwd2) {
    return res
      .status(400)
      .json({ message: "messages.error.password1.notMatch" });
  }
  next();
};

const checkBirthDate = (req, res, next) => {
  const birthDate = new Date(req.body.birth_date);
  const today = new Date();
  if (birthDate > today) {
    return res
      .status(400)
      .json({ message: "messages.error.birth_date.invalid" });
  }
  // If under 18 years old
  if (today.getFullYear() - birthDate.getFullYear() < 18) {
    return res
      .status(400)
      .json({ message: "messages.error.birth_date.18yearsOld" });
  }
  next();
};

checkTermsChecked = (req, res, next) => {
  if (!req.body.terms_and_conditions) {
    return res
      .status(400)
      .json({ message: "messages.error.terms_and_conditions.notAccepted" });
  }
  next();
};

const checkRegister = {
  checkFields,
  checkDuplicateUser,
  checkEmail,
  checkPassword,
  checkDifferentPasswords,
  checkBirthDate,
  checkTermsChecked,
};

module.exports = checkRegister;
