const tripsPageController = require("../controllers/tripsPage.controller");
const authJwt = require("../middlewares/authJwt");

module.exports = function (app) {
  app
    .route("/trips/:id([0-9a-f]{24})")
    .get(
      [authJwt.isUserLogged, authJwt.isSameUser],
      tripsPageController.getUserTrips
    );
};
