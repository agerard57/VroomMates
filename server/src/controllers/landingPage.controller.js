const TripsModel = require("../models/trips.model");
const UsersModel = require("../models/users.model");

const getTripsStats = () => {
  return TripsModel.aggregate([
    {
      $group: {
        _id: null,
        nbSingleTrips: {
          $sum: { $cond: [{ $eq: ["$type", "single"] }, 1, 0] },
        },
        nbFrequentTrips: {
          $sum: { $cond: [{ $eq: ["$type", "frequent"] }, 1, 0] },
        },
        totalTrips: {
          $sum: 1,
        },
        totalDistance: {
          $sum: "$distance",
        },
      },
    },
  ]);
};

const getUsersStats = () => {
  return UsersModel.aggregate([
    {
      $group: {
        _id: null,
        nbDrivers: {
          $sum: { $cond: [{ $eq: ["$status", "driver"] }, 1, 0] },
        },
        nbPassengers: {
          $sum: { $cond: [{ $eq: ["$status", "passenger"] }, 1, 0] },
        },
        totalUsers: {
          $sum: 1,
        },
      },
    },
  ]);
};

exports.getStats = (_req, res) => {
  Promise.all([getTripsStats(), getUsersStats()])
    .then(([tripsStats, usersStats]) => {
      res.status(200).json({
        trips: tripsStats,
        users: usersStats,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
