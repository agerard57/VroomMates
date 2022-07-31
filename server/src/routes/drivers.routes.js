const driversController = require("../controllers/drivers.controller");
const pagesController = require("../controllers/pages.controller");

module.exports = function (app) {
  app.route("/").get(pagesController.landingPage);
  app.route("/details/:id").get(pagesController.details);
  app.route("/drivers").get(driversController.getAll);
  app.route("/driver/:id").get(driversController.getOneById);
};
