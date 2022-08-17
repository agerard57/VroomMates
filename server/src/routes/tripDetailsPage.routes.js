const tripDetailsPageController = require("../controllers/tripDetailsPage.controller");

module.exports = function (app) {
  app
    .route("/trip/:id([0-9a-f]{24})")
    .get(tripDetailsPageController.getTripDetailsById);
};
