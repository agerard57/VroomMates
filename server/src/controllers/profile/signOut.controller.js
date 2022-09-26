const jwt = require("jsonwebtoken");
const UsersModel = require("../../models/users.model");
const jwtConfig = require("../../config/jwt.config");

module.exports = (req, res) => {
  const token = req.body.authToken;
  const payload = jwt.verify(token, jwtConfig.authJwt.key, {
    ignoreExpiration: true,
  });

  if (token)
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
  else res.status(401).json({ message: "signOut.success" });
};
