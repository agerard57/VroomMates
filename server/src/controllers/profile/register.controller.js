const bcrypt = require("bcryptjs");
const UsersModel = require("../../models/users.model");

module.exports = (req, res) => {
  const user = new UsersModel({
    name: { last_name: req.body.last_name, first_name: req.body.first_name },
    "email.email_address": req.body.email,
    password: bcrypt.hashSync(req.body.password1, 8),
    address: {
      house_number: req.body.house_number,
      street_name: req.body.street_name,
      city: req.body.city,
      zip: req.body.zip,
      state: req.body.state,
      country: req.body.country,
    },
    birth_date: req.body.birth_date,
  });

  user.save((err, _user) => {
    if (err) {
      res.status(500).json({ message: "messages.error" });
      return;
    }
    res.status(200).json({ message: "messages.success" });
  });
};
