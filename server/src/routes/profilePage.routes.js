const profilePageController = require("../controllers/profilePage.controller");

module.exports = function (app) {
  app.route("/user/:id([0-9a-f]{24})").get(profilePageController.getUserById);
};
