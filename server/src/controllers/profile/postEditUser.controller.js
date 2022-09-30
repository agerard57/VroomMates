const UsersModel = require("../../models/users.model");

// Update user infos
module.exports = (req, res) => {
  const {
    name,
    email_address,
    password,
    address,
    birthDate,
    photo_url,
    about,
  } = req.body;
  // email.Confirmed is set to false if address is given
  const email = email_address
    ? { email_address: address, confirmed: false }
    : undefined;
  UsersModel.findByIdAndUpdate(
    req.locals.user.id,
    {
      name,
      email,
      password,
      address,
      birthDate,
      photo_url,
      about,
    },
    { new: true, runValidators: true, context: "query" },
    (err, _user) => {
      if (err) {
        res.status(500).json(err);
        return;
      }

      res.status(204).json({ message: "User updated" });
    }
  );
};
