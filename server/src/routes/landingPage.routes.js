const landingPageController = require("../controllers/landingPage.controller");

module.exports = (app) => {
  app.route("/home").get(landingPageController.getStats);
};
