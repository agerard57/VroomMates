const UsersModel = require("../../models/users.model");

// Get infos to fill the edit profile form
module.exports = (_req, res) => {
  UsersModel.findById(res.locals.user.id, {
    "email.confirmed": 0,
    stripe_id: 0,
    password: 0,
    status: 0,
    ratings: 0,
    registered_since: 0,
  }).exec((err, user) => {
    if (err) {
      res.status(500).json(err);
      return;
    }

    res.status(200).json(user);
  });
};
