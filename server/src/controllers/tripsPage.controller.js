const TripsModel = require("../models/trips.model");

exports.getUserTrips = (req, res) => {
  const userId = req.params.id;

  const returnFields = {
    _id: 1,
    "departure.time": 1,
    "departure.place_name": 1,
    "arrival.time": 1,
    "arrival.place_name": 1,
    driver: 1,
    frequent_trip_options: 1,
    "price_per_seat.total": 1,
    status: 1,
    type: 1,
  };

  TripsModel.find(
    {
      $or: [{ driver: userId }, { passengers: userId }],
      sort: {
        "departure.time": -1,
      },
    },
    returnFields
  )
    .populate({
      path: "driver",
      model: "Users",
      select: "_id name.first_name",
    })
    .exec((err, tripsList) =>
      err
        ? res.status(500).send(err)
        : res.status(200).json({
            tripsCreated: tripsList.filter(
              (trip) => trip.driver._id === userId
            ),
            currentTrips: tripsList.filter(
              (trip) => trip.status === "ongoing" || trip.status === "confirmed"
            ),
            pastTrips: tripsList.filter(
              (trip) => trip.status === "finished" || trip.status === "canceled"
            ),
          })
    );
};
