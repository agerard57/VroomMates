const profilePageController = require("../controllers/profilePage.controller");
const authJwt = require("../middlewares/authJwt");

module.exports = function (app) {
  app
    .route("/user/:id([0-9a-f]{24})")
    .get([authJwt.isUserLogged], profilePageController.getUserById);
};
