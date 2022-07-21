const usersController = require("../controllers/users.controller");

module.exports = function (app) {
  app.route("/users").get(usersController.getAll);
  app.route("/user/:id").get(usersController.getOneById);
  app.route("/user").get(usersController.countUsers);
};
