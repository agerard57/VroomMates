const TripsModel = require("../models/trips.model");
const UsersModel = require("../models/users.model");

//////////////////
//Find all trips and, then populate the users then count the passengers

exports.getSearchResults = (req, res) => {
  TripsModel.find(
    {},
    {
      passengers: 0,
      "price_per_seat.km_price": 0,
      "price_per_seat.service_fee": 0,
    }
  )
    .populate({
      path: "driver_id",
      select: "-_id name.first_name email.confirmed photo_url",
    })
    .then((trips) => {
      res.json(trips);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
