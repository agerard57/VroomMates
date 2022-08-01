const UsersModel = require("../models/users.model");

// //////////////////
// Get all controller
exports.getAll = (_req, res) => {
  UsersModel.find().then((users) => {
    res.json(users);
  });
};

// //////////////////
// Get one controller
exports.getOneById = (req, res) => {
  const id = req.params.id;
  UsersModel.findOne({ _id: id }).then((user) => {
    res.json(user);
  });
};

// //////////////////
// Get one controller
exports.countUsers = (_req, res) => {
  UsersModel.count({ status: "driver" }).then((deez) => {
    res.json(deez);
  });
};

// //////////////////
// Get last name,