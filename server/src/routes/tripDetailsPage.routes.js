const authJwt = require("../middlewares/authJwt");
const tripDetailsPageController = require("../controllers/tripDetailsPage/tripDetailsPage.controller");

module.exports = (app) => {
  app
    .route("/trip/:id([0-9a-f]{24})")
    .get(tripDetailsPageController.getTripDetailsById)
    .delete([authJwt.isUserLogged], tripDetailsPageController.cancelTrip);

  app
    .route("/passenger/:id([0-9a-f]{24})")
    .put([authJwt.isUserLogged], tripDetailsPageController.removePassenger);
};
