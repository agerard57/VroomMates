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
      user.name.last_name = user.name.last_name.charAt(0) + ".";
      //Check if user.ratings exists and not empty
      if (user.ratings && user.ratings.length > 0) {
        const ratings = user.ratings.map((rating) => parseInt(rating.rating));
        user.ratings.forEach((rating) => {
          rating.author.name.last_name =
            rating.author.name.last_name.charAt(0) + ".";
        });
        user.avg_rating =
          ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length;
      }
      TripsModel.find({ driver: user._id }).then((trips) => {
        user.nb_trips_created = trips.length;
        // Count the number of trips that the user has been a passenger to
        user.nb_trips_participated = trips.filter((trip) => {
          return trip.passengers.includes(user._id);
        }).length;
        DriversModel.find({ user: user._id }).then((driver) => {
          // Check if there's a result
          if (driver.length > 0) {
            user.car = driver[0].car;
          }

          res.status(200).json(user);
        });
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
