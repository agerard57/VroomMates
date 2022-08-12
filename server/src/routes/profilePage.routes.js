const profilePageController = require("../controllers/profilePage.controller");

module.exports = function (app) {
  app.route("/user/:id").get(profilePageController.getUserById);
};
