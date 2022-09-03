const UsersModel = require("../models/users.model");
const bcrypt = require("bcryptjs");
const generateJwt = require("../utils/generateJwt");
const schedule = require("node-schedule");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.config");

exports.register = (req, res) => {
  const user = new UsersModel({
    name: req.body.name,
    "email.email_address": req.body.email,
    password: bcrypt.hashSync(req.body.password1, 8),
    address: req.body.address,
    birth_date: req.body.birthDate,
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
  const remember = req.body.remember === "remember-me" ? true : false;

  UsersModel.findOne({
    "email.email_address": req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }

    const authToken = generateJwt(user, "auth", remember);
    const refreshToken = generateJwt(user, "refresh", remember);
    const date = new Date();
    const expirationDate = remember
      ? date.setMonth(date.getMonth() + 1)
      : date.setDate(date.setDate() + 1);

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
        schedule.scheduleJob(new Date(expirationDate), () => {
          UsersModel.findOneAndUpdate(
            { _id: user._id },
            { $pull: { refreshTokens: refreshToken } },
            (err, _user) => {
              if (err) {
                console.log(err.message);
                return;
              }
            }
          );
        });
        res.status(200).json({
          message: "User successfully logged",
          authToken,
        });
      }
    );
  });
};

exports.refresh = (req, res) => {
  const token = req.headers["x-access-token"];
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
    if (user && user.refreshTokens.length > 0) {
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
          token: authToken,
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
