const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.config");

const isUserLogged = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  jwt.verify(token, jwtConfig.authJwt.key, (err, decrypted) => {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(401).send({
        message: "Authentication token expired!",
      });
    }
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({
        message: "Invalid token!",
      });
    }
    res.locals.user = decrypted;
    next();
  });
};

const isPassenger = (_req, res, next) => {
  if (res.locals.user.role === "passenger") {
    next();
  } else {
    return res.status(403).send({
      message: "You must be a passenger to access this content!",
    });
  }
};

const isDriver = (_req, res, next) => {
  if (res.locals.user.role === "driver") {
    next();
  } else {
    return res.status(403).send({
      message: "You must be a driver to access this content!",
    });
  }
};

const isAdmin = (_req, res, next) => {
  if (res.locals.user.role === "admin") {
    next();
  } else {
    return res.status(403).send({
      message: "You must be an admin to access this content!",
    });
  }
};

const isSameUser = (req, res, next) => {
  if (res.locals.user.id === req.params.id) {
    next();
  } else {
    return res.status(403).send({
      message: "You must be the concerned user to access this content!",
    });
  }
};

const authJwt = {
  isUserLogged,
  isSameUser,
  isPassenger,
  isDriver,
  isAdmin,
};

module.exports = authJwt;
