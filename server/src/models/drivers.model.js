const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const driversSchema = mongoose.Schema(
  {
    user: {
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
    license_card_filename: {
      type: "String",
      required: true,
    },
    request_date: {
      type: "Date",
      default: Date.now,
      required: true,
    },
  },
  { collection: "Drivers" }
);

driversSchema.index({ id: 1 }, { unique: true });

driversSchema.plugin(uniqueValidator);

const driversModel = mongoose.model("Drivers", driversSchema);

module.exports = driversModel;
