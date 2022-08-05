const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const locationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const tripsSchema = mongoose.Schema(
  {
    driver: {
      type: "ObjectId",
      ref: "Users",
    },
    day_of_week: {
      type: ["String"],
      enum: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
    },
    passengers: { type: ["ObjectId"], ref: "Users" },
    type: {
      type: "String",
    },
    departure: {
      location: {
        type: locationSchema,
        required: true,
        index: "2dsphere",
      },
      time: { type: "Date", required: true },
    },
    arrival: {
      location: {
        type: locationSchema,
        required: true,
        index: "2dsphere",
      },
      time: { type: "Date", required: true },
    },
    free_seats: {
      type: "number",
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
    }, // TODO Include ratings...
  },
  { collection: "Trips" }
);

tripsSchema.index({ id: 1 }, { unique: true });

tripsSchema.plugin(uniqueValidator);

const tripsModel = mongoose.model("Trips", tripsSchema);

module.exports = tripsModel;
