const tripsController = require("../controllers/trips.controller");

module.exports = function (app) {
  app.route("/trips").get(tripsController.getAll);
  app.route("/trip/:id").get(tripsController.getOneById);
  app.route("/moni").get(tripsController.sumPrices);
};
