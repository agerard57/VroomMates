const notificationsController = require("../controllers/notifications.controller");

module.exports = function (app) {
  app.route("/notifications").get(notificationsController.getAll);
  app
    .route("/notification/:user_id")
    .get(notificationsController.getOneByUserId);
};
