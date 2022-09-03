const landingPageController = require("../controllers/landingPage.controller");
module.exports = function (app) {
  app.route("/home").get(landingPageController.getStats);
};
