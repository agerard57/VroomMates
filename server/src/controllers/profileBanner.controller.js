const UsersModel = require("../models/users.model");
const TripsModel = require("../models/trips.model");

exports.getProfilePicSrc = (req, res) => {
  UsersModel.findById(req.params.id, {
    photo_url: 1,
  })
    .then((user) => {
      res.send({ profilePicSrc: user.photo_url });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getUserData = (req, res) => {
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
        res.status(200).json({
          user: {
            firstName: user.name.first_name,
            lastName: user.name.last_name,
            profilePicSrc: user.photo_url,
            dateOfBirth: user.birth_date,
            status: user.status,
          },
          stats: {
            avgRating: user.avg_rating,
            nbTripsCreated: user.nb_trips_created,
            nbTripsParticipated: user.nb_trips_participated,
          },
        });
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
