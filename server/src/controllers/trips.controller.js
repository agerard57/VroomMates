const TripsModel = require("../models/trips.model");

// //////////////////
// Get all controller
exports.getAll = (_req, res) => {
  TripsModel.find().then((trips) => {
    res.json(trips);
  });
};

// //////////////////
// Get one controller
exports.getOneById = (req, res) => {
  const id = req.params.id;
  TripsModel.findOne({ _id: id }).then((trip) => {
    res.json(trip);
  });
};

// //////////////////
// Sums all the prices of the trips
exports.sumPrices = (_req, res) => {
  TripsModel.aggregate([
    {
      $group: {
        _id: null,
        total: { $sum: "$price_per_seat.total" },
      },
    },
  ]).then((total) => {
    res.json(total);
  });
};

// //////////////////
