const DriversModel = require("../models/drivers.model");

// //////////////////
// Get all controller
exports.getAll = (_req, res) => {
  DriversModel.find().then((drivers) => {
    res.json(drivers);
  });
};

// //////////////////
// Get one controller
exports.getOneById = (req, res) => {
  const id = req.params.id;
  DriversModel.findOne({ _id: id }).then((driver) => {
    res.json(driver);
  });
};
