const driversController = require("../controllers/drivers.controller");

module.exports = function (app) {
  app.route("/drivers").get(driversController.getAll);
  app.route("/driver/:id").get(driversController.getOneById);
};
