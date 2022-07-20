const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const chatRoomsSchema = mongoose.Schema(
  {
    trip_id: {
      type: "ObjectId",
      ref: "Trips",
      required: true,
    },
    content: [
      {
        author_id: {
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

chatRoomsSchema.index({ id: 1 }, { unique: true });

chatRoomsSchema.plugin(uniqueValidator);

const chatRoomsModel = mongoose.model("Chat_Rooms", chatRoomsSchema);

module.exports = chatRoomsModel;
