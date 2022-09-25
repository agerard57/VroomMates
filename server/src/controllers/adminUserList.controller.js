const UsersModel = require("../models/users.model");
const getAvgRating = require("../utils/getAvgRating");

exports.getUsers = (_req, res) => {
  UsersModel.find()
    .then((users) => {
      const formattedUsers = users.map((user) => ({
        id: user._id,
        name: {
          firstName: user.name.first_name,
          lastName: user.name.last_name,
        },
        photoUrl: user.photo_url,
        confirmed: user.email.confirmed,
        avgRating: getAvgRating(user.ratings),
        status: user.status,
        registeredSince: user.registered_since,
      }));

      res.status(200).json(formattedUsers);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
