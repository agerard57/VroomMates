const UsersModel = require("../models/users.model");
const bcrypt = require("bcryptjs");
const generateJwt = require("../utils/generateJwt");
const schedule = require("node-schedule");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.config");
const getAvgRating = require("../utils/getAvgRating");
const DriversModel = require("../models/drivers.model");
const TripsModel = require("../models/trips.model");
const s3 = require("../services/s3");
const fs = require("fs");
const path = require("path");
const { profile } = require("console");

exports.register = (req, res) => {
  const user = new UsersModel({
    name: { last_name: req.body.last_name, first_name: req.body.first_name },
    "email.email_address": req.body.email,
    password: bcrypt.hashSync(req.body.password1, 8),
    address: {
      house_number: req.body.house_number,
      street_name: req.body.street_name,
      city: req.body.city,
      zip: req.body.zip,
      state: req.body.state,
      country: req.body.country,
    },
    birth_date: req.body.birth_date,
  });

  user.save((err, _user) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.status(200).json({ message: "User registered successfully" });
  });
};

exports.login = (req, res) => {
  const rememberMe = req.body.rememberMe;

  UsersModel.findOne({
    "email.email_address": req.body.email,
  })
    .lean()
    .exec((err, user) => {
      if (err) {
        res.status(500).json({ message: err.message });
        return;
      }

      user.avg_rating = getAvgRating(user.ratings);

      const authToken = generateJwt(user, "auth", rememberMe);
      const refreshToken = generateJwt(user, "refresh", rememberMe);
      const date = new Date();
      const expirationDate = rememberMe
        ? new Date(date.setMonth(date.getMonth() + 1))
        : new Date(date.setDate(date.getDate() + 1));

      // How many minutes since registration
      const minutesSinceRegistration = Math.floor(
        (new Date() - user.registered_since) / 60000
      );

      const isFirstLogin =
        user.photo_url === "e6f5576639004a105dc76a6d0bbfb0d0" &&
        !user.about &&
        minutesSinceRegistration < 5;

      // Save the refresh token in the database
      UsersModel.findOneAndUpdate(
        { _id: user._id },
        { $push: { refreshTokens: refreshToken } },
        (err, _user) => {
          if (err) {
            res.status(500).json({ message: err.message });
            return;
          }
          // Schedule the deletion of the refresh token
          schedule.scheduleJob(expirationDate, () => {
            UsersModel.findOneAndUpdate(
              { _id: user._id },
              { $pull: { refreshTokens: refreshToken } },
              (err, _user) => {
                if (err) {
                  console.error(err.message);
                  return;
                }
              }
            );
          });
          res.status(200).json({
            message: "messages.success",
            authToken,
            rememberMe,
            isFirstLogin,
          });
        }
      );
    });
};

exports.editAbout = (req, res) => {
  const { bio, chatty, music, animals_tolerated, hobbies } = req.body;

  UsersModel.findOneAndUpdate(
    { _id: res.locals.user.id },
    {
      $set: {
        about: {
          bio,
          chatty,
          music,
          animals_tolerated,
          hobbies,
        },
      },
    }
  )
    .then((_user) => {
      res.status(200).json({ message: "messages.about.updated" });
    })
    .catch((err) => {
      res.status(500).json({ message: "message.about.error" });
    });
};

exports.refresh = (req, res) => {
  const token = req.body.authToken;
  const payload = jwt.verify(token, jwtConfig.authJwt.key, {
    ignoreExpiration: true,
  });
  // Look in the database for the user whose id is in the expired payload
  UsersModel.findById(payload.id, (err, user) => {
    if (err) {
      return res.status(500).send({
        message: err.message,
      });
    }
    if (user && user.refreshTokens) {
      // Check if at least one of the refresh token is valid
      const validRefreshToken = user.refreshTokens.find((refreshToken) => {
        try {
          jwt.verify(refreshToken, jwtConfig.refreshJwt.key);
          return true;
        } catch (err) {
          return false;
        }
      });
      if (validRefreshToken) {
        // Generate a new access token
        const authToken = jwt.sign(
          jwtConfig.authJwt.payload(user),
          jwtConfig.authJwt.key,
          jwtConfig.authJwt.options
        );
        return res.status(200).send({
          message: "Token refreshed successfully",
          authToken: authToken,
        });
      } else {
        return res.status(401).send({
          message: "Refresh token expired",
        });
      }
    }
    return res.status(401).send({
      message: "No refresh token found",
    });
  });
};

exports.signOut = (req, res) => {
  const token = req.body.authToken;
  const payload = jwt.verify(token, jwtConfig.authJwt.key, {
    ignoreExpiration: true,
  });

  UsersModel.findOneAndUpdate(
    { _id: payload.id },
    { $set: { refreshTokens: [] } },
    (err, _user) => {
      if (err) {
        res.status(500).json({ message: err.message });
        return;
      }
      res.status(200).json({ message: "signOut.success" });
    }
  );
};

exports.closeAccount = (_req, res) => {
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
              return;
            }
          }
        );
      }

      // Delete driver
      DriversModel.deleteOne({ user: userId }, (err) => {
        if (err) {
          res.status(500).json({ message: "message.error" });
          return;
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
              return;
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
