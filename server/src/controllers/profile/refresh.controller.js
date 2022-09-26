const jwt = require("jsonwebtoken");
const UsersModel = require("../../models/users.model");
const jwtConfig = require("../../config/jwt.config");

module.exports = (req, res) => {
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
          authToken,
        });
      }
      return res.status(401).send({
        message: "Refresh token expired",
      });
    }
    return res.status(401).send({
      message: "No refresh token found",
    });
  });
};
