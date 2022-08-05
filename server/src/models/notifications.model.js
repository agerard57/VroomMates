const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const notificationsSchema = mongoose.Schema(
  {
    user: {
      type: "ObjectId",
      ref: "Users",
      required: true,
    },
    content: [
      {
        author: {
          type: "ObjectId",
          ref: "Users",
          required: true,
          // Add VroomMates as default author
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
  { collection: "Notifications" }
);

notificationsSchema.index({ id: 1 }, { unique: true });

notificationsSchema.plugin(uniqueValidator);

const notificationModel = mongoose.model("Notifications", notificationsSchema);

module.exports = notificationModel;
