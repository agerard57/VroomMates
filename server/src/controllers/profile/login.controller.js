const schedule = require("node-schedule");
const UsersModel = require("../../models/users.model");
const generateJwt = require("../../utils/generateJwt");
const getAvgRating = require("../../utils/getAvgRating");

module.exports = (req, res) => {
  const { rememberMe } = req.body;

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
