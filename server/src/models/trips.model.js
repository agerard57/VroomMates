const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const tripsSchema = mongoose.Schema(
  {
    driver_id: {
      type: "ObjectId",
      ref: "Users",
    },
    day_of_week: {
      type: ["String"],
    },
    passengers: { type: ["ObjectId"], ref: "Users" },
    type: {
      type: "String",
    },
    departure: {
      location: {
        type: {
          type: "String",
        },
        coordinates: { type: ["number"] },
        time: { type: "Date" },
      },
    },
    arrival: {
      location: {
        type: {
          type: "String",
        },
        coordinates: { type: ["number"] },
        time: { type: "Date" },
      },
    },
    free_seats: {
      type: "Number",
    },
    price_per_seat: {
      km_price: {
        type: "number",
      },
      service_fee: {
        type: "number",
      },
      total: {
        type: "number",
      },
    },
    trip_duration: {
      type: "number",
    },
    startDate: { type: "Date" },
    endDate: { type: "Date" },
    distance: {
      type: "number",
    },
    status: {
      type: "String",
      enum: ["pending", "confirmed", "ongoing", "done", "cancelled"],
    },
  },
  { collection: "Trips" }
);

tripsSchema.index({ id: 1 }, { unique: true });

tripsSchema.plugin(uniqueValidator);

const tripsModel = mongoose.model("Trips", tripsSchema);

module.exports = tripsModel;
