const chatRooms = require("../controllers/chatRooms.controller");

module.exports = function (app) {
  app.route("/chats").get(chatRooms.getAll);

  app.route("/chat/:id").get(chatRooms.getOneById);
};
