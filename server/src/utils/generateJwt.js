const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.config");

const generateJwt = (user, type, rememberMe) => {
  const { authJwt, refreshJwt } = jwtConfig;

  return type === "auth"
    ? jwt.sign(authJwt.payload(user, rememberMe), authJwt.key, authJwt.options)
    : jwt.sign(
        refreshJwt.payload(user),
        refreshJwt.key,
        refreshJwt.options(rememberMe)
      );
};

module.exports = generateJwt;
