const fs = require("fs");
const path = require("path");
const UsersModel = require("../../models/users.model");
const DriversModel = require("../../models/drivers.model");
const TripsModel = require("../../models/trips.model");
const s3 = require("../../services/s3");

module.exports = (_req, res) => {
  const userId = res.locals.user.id;

  // Remove the user's driver license
  DriversModel.findOne({ user: userId }, (_err, driver) => {
    if (driver) {
      if (driver.license_card_filename) {
        fs.unlink(
          path.join(
            __dirname,
            `../../driversLicenses/${driver.license_card_filename}`
          ),
          (err) => {
            if (err) {
              res.status(500).json({ message: "message.error" });
            }
          }
        );
      }

      // Delete driver
      DriversModel.deleteOne({ user: userId }, (err) => {
        if (err) {
          res.status(500).json({ message: "message.error" });
        }
      });
    }
  });

  // Delete all the user's trips as a driver
  TripsModel.deleteMany({ driver: userId }, (err, _trips) => {
    if (err) {
      res.status(500).json({ message: "message.error" });
      return;
    }

    // Delete user from all trips as a passenger
    TripsModel.find({ passengers: userId }, (err, trips) => {
      if (err) {
        res.status(500).json({ message: "message.error" });
        return;
      }
      trips.forEach((trip) => {
        const passengers = trip.passengers.filter(
          (passenger) => passenger !== userId
        );
        TripsModel.findOneAndUpdate(
          { _id: trip._id },
          { $set: { passengers } },
          (err, _trip) => {
            if (err) {
              res.status(500).json({ message: "message.error" });
            }
          }
        );
      });
    });
  });

  // Delete profile picture from s3
  UsersModel.findById(userId).then((user) => {
    if (user.photo_url !== "e6f5576639004a105dc76a6d0bbfb0d0") {
      s3.deleteFile(user.photo_url);
    }

    // Delete user
    UsersModel.findByIdAndDelete(userId, (err, _user) => {
      if (err) {
        res.status(500).json({ message: "message.error" });
        return;
      }
      res.status(204).json({ message: "message.success" });
    });
  });
};
