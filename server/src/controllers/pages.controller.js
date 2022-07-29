/* const UsersModel = require("../models/users.model");
const TripsModel = require("../models/trips.model");
const DriversModel = require("../models/drivers.model");

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

exports.landingPage = (_req, res) => {
  TripsModel.count({}).then((nbTrips) => {
    UsersModel.count({}).then((nbUsers) => {
      UsersModel.count({ status: "driver" }).then((nbDrivers) => {
        UsersModel.count({ status: "passenger" }).then((nbPassengers) => {
          TripsModel.count({ type: "frequent" }).then((nbFrequent) => {
            TripsModel.count({ type: "single" }).then((nbSingle) => {
              res.json({
                nbTrips,
                nbUsers,
                nbDrivers,
                nbPassengers,
                nbFrequent,
                nbSingle,
              });
            });
          });
        });
      });
    });
  });
};

// //////////////////
// Get one trip by id and get the driver
exports.details = (req, res) => {
  const id = req.params.id;
  TripsModel.findOne({ _id: id }).then((trip) => {
    UsersModel.findOne({ _id: trip.driver_id }).then((user) => {
      DriversModel.findOne({ user_id: trip.driver_id }).then((driver) => {
        res.json({
          trip,
          user,
          driver,
        });
      });
    });
  });
};

// Get trips and exclude the return of the status value

// Count user ratings
exports.countRatings = (req, res) => {
  UsersModel.aggregate([
    {
      $match: {
        lastName: user.name.last_name,
      },
      $project: {
        total: { $sum: "$ratings" },
      },
    },
  ]).then((total) => {
    res.json(total);
  });
};

// Get car by user id if status is valid
exports.getCar = (req, res) => {
  const id = req.params.id;
  UsersModel.findOne({ _id: id }).then((user) => {
    if (user.status === "driver") {
      UsersModel.findOne({ _id: id }).then((car) => {
        res.json(car);
      });
    } else {
      res.json({ message: "There are no drivers" });
    }
  });
};

// Get user by id then get user last name

//Get age from date of birth of user
exports.getAge = (req, res) => {
  const date = req.params.date;
  const ageDiff = new Date().getFullYear() - date.getFullYear();
  res.json(ageDiff);
};
 */
/*   // Get name ang count ratings from user and get car from driver
  exports.getNameAndRatings = (req, res) => {
    const id = req.params.id;
    UsersModel.findOne({ _id: id }).then((user) => {
      UsersModel.findOne({ _id: id }).then((car) => {
        res.json({
          user:{firstName:user.first_name, ratings:},
          car,
        });
      });
    });
  } */
