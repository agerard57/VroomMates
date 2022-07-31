const NotificationsModel = require("../models/notifications.model");

// //////////////////
// Get all controller
exports.getAll = (_req, res) => {
  NotificationsModel.find().then((notifications) => {
    res.json(notifications);
  });
};

// //////////////////
// Get one controller
exports.getOneByUserId = (req, res) => {
  const user_id = req.params.user_id;
  NotificationsModel.findOne({ user_id: user_id }).then((notification) => {
    res.json(notification);
  });
};
