const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.config");

const generateJwt = (user, type, remember) => {
  const { authJwt, refreshJwt } = jwtConfig;

  return type === "auth"
    ? jwt.sign(authJwt.payload(user), authJwt.key, authJwt.options)
    : jwt.sign(
        refreshJwt.payload(user),
        refreshJwt.key,
        refreshJwt.options(remember)
      );
};

module.exports = generateJwt;
