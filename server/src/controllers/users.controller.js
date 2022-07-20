const UserModel = require("../models/users.model");

// //////////////////
// Get all controller
exports.getAll = (_req, res) => {
    UserModel.find().then((user) => {
      res.json(user);
      console.log(user);
    });
  };

// //////////////////
// Get one controller
exports.getOne = (req, res) => {
    const id = req.params.id;
    UsersModel.findOne({ id: id }).then((users) => {
      res.json(users);
    });
  };