const UsersModel = require("../models/users.model");
const DriversModel = require("../models/drivers.model");
const TripsModel = require("../models/trips.model");

exports.getUserById = (req, res) => {
  UsersModel.findById(req.params.id, {
    "email.email_address": 0,
    password: 0,
    address: 0,
    stripe_id: 0,
    registered_since: 0,
  })
    .populate({
      path: "ratings.author",
      model: "Users",
      select: "-_id name",
    })
    .lean()
    .then((user) => {
      const ratings = user.ratings.map((rating) => parseInt(rating.rating));
      user.name.last_name = user.name.last_name.charAt(0) + ".";
      user.ratings.forEach((rating) => {
        rating.author.name.last_name =
          rating.author.name.last_name.charAt(0) + ".";
      });
      user.avg_rating =
        ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length;
      TripsModel.find({ driver: user._id }).then((trips) => {
        user.nb_trips_created = trips.length;
        // Count the number of trips that the user has been a passenger in
        user.nb_trips_participated = trips.filter((trip) => {
          return trip.passengers.includes(user._id);
        }).length;
        if (user.status === "driver") {
          DriversModel.find({ user: user._id }).then((driver) => {
            user.car = driver[0].car;

            res.status(200).json(user);
          });
        } else {
          res.status(200).json(user);
        }
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
