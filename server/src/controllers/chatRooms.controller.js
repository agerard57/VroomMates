const ChatRoomsModel = require("../models/chatRooms.model");

// //////////////////
// Get all controller
exports.getAll = (_req, res) => {
  ChatRoomsModel.find().then((chats) => {
    res.json(chats);
  });
};

// //////////////////
// Get one controller
exports.getOneByTripId = (req, res) => {
  const id = req.params.id;
  ChatRoomsModel.findOne({ trip_id: id }).then((chat) => {
    res.json(chat);
  });
};
