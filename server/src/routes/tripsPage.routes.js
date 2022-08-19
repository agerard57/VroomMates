const tripsPageController = require("../controllers/tripsPage.controller");

module.exports = function (app) {
  app.route("/trips/:id([0-9a-f]{24})").get(tripsPageController.getUserTrips);
};
