const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const driversSchema = mongoose.Schema(
  {
    user_id: {
      type: "ObjectId",
      ref: "Users",
      required: true,
    },
    status: {
      type: "String",
      required: true,
    },
    car: {
      brand: {
        type: "String",
      },
      model: {
        type: "String",
      },
      color: {
        type: "String",
      },
    },
    licence_card_photo_url: {
      type: "String",
      required: true,
    },
  },
  { collection: "Drivers" }
);

driversSchema.index({ id: 1 }, { unique: true });

driversSchema.plugin(uniqueValidator);

const driversModel = mongoose.model("Drivers", driversSchema);

module.exports = driversModel;
