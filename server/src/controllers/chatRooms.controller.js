const ChatRooms = require("../models/chatRooms.model");

// //////////////////
// Get all controller
exports.getAll = (_req, res) => {
  ChatRooms.find().then((chat) => {
    res.json(chat);
  });
};

// //////////////////
// Get one controller
exports.getOneById = (req, res) => {
  const id = req.params.id;
  ChatRooms.findOne({ trip_id: ObjectId(id) }).then((chat) => {
    res.json(chat);
  });
  console.log(id);
};
