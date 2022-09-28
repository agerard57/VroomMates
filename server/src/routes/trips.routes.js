const searchPageController = require("../controllers/searchPage.controller");
const tripsPageController = require("../controllers/tripsPage.controller");
const addTripModalController = require("../controllers/addTripModal.controller");
const checkTripSearch = require("../middlewares/checkTripSearch");
const authJwt = require("../middlewares/authJwt");

// Search trips
module.exports = (app) => {
  app
    .route("/search")
    .get(
      [checkTripSearch.hasEveryFieldBeenFilled],
      searchPageController.getSearchResults
    );

  // Get all trips for a user
  app
    .route("/trips/:id([0-9a-f]{24})")
    .get(
      [authJwt.isUserLogged, authJwt.isSameUser],
      tripsPageController.getUserTrips
    );

  // Add a trip
  app
    .route("/trip")
    .post([authJwt.isUserLogged], addTripModalController.addTrip);
};
