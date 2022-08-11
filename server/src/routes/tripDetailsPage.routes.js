const tripDetailsPageController = require("../controllers/tripDetailsPage.controller");

module.exports = function (app) {
  app.route("/trip/:id").get(tripDetailsPageController.getTripDetailsById);
};
