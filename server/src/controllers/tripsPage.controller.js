const TripsModel = require("../models/trips.model");

exports.getUserTrips = (req, res) => {
  const userId = req.params.id;

  const populateDriver = {
    path: "driver",
    model: "Users",
    select: "_id name.first_name",
  };

  const findInDriversAndPassengers = {
    $or: [
      {
        passengers: userId,
      },
      {
        driver: userId,
      },
    ],
  };

  const sortByDepartureTime = {
    sort: {
      "departure.time": -1,
    },
  };

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

  // Make three arrays : The first one is called tripsCreated and has all the trips where driver=userId.
  TripsModel.find(
    {
      driver: userId,
      sortByDepartureTime,
    },
    returnFields
  )
    .populate(populateDriver)
    .exec((_err, tripsCreated) => {
      // The second one is called currentTrips and has all the trips where status="ongoing" or status="confirmed".
      TripsModel.find(
        {
          findInDriversAndPassengers,
          status: { $in: ["ongoing", "confirmed"] },
          sortByDepartureTime,
        },
        returnFields
      )
        .populate(populateDriver)
        .exec((_err, currentTrips) => {
          // The third one is called pastTrips and has all the trips where status="finished"
          TripsModel.find(
            {
              findInDriversAndPassengers,
              status: "finished",
              sortByDepartureTime,
            },
            returnFields
          )
            .populate(populateDriver)
            .exec((_err, pastTrips) => {
              res.status(200).json({
                tripsCreated,
                currentTrips,
                pastTrips,
              });
            });
        });
    });
};
