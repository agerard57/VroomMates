const chatRoomsController = require("../controllers/chatRooms.controller");

module.exports = function (app) {
  app.route("/chats").get(chatRoomsController.getAll);

  app.route("/chat/:id").get(chatRoomsController.getOneByTripId);
};
