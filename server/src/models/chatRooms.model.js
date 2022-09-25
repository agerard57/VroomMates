const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const chatRoomsSchema = mongoose.Schema(
  {
    trip: {
      type: "ObjectId",
      ref: "Trips",
      required: true,
    },
    content: [
      {
        author: {
          type: "ObjectId",
          ref: "Users",
          required: true,
        },
        message: {
          type: "String",
          required: true,
        },
        is_read: {
          type: "Boolean",
          default: false,
        },
        date: {
          type: "Date",
          default: Date.now,
        },
      },
    ],
  },
  { collection: "Chat_Rooms" }
);

chatRoomsSchema.plugin(uniqueValidator);

const chatRoomsModel = mongoose.model("Chat_Rooms", chatRoomsSchema);

module.exports = chatRoomsModel;
