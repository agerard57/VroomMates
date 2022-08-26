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
      required: true,
    },
    passengers: { type: ["ObjectId"], ref: "Users" },
    type: {
      type: "String",
      enum: ["single", "frequent"],
      required: true,
    },
    frequent_trip_options: {
      day_of_week: {
        type: ["number"],
        enum: [0, 1, 2, 3, 4, 5, 6],
        required: true,
        default: undefined,
      },
      start_date: { type: "Date", required: true },
      end_date: { type: "Date", required: true },
    },
    departure: {
      location: {
        type: locationSchema,
        required: true,
        index: "2dsphere",
      },
      place_name: { type: "String", required: true },
      time: { type: "Date", required: true },
    },
    arrival: {
      location: {
        type: locationSchema,
        required: true,
        index: "2dsphere",
      },
      place_name: { type: "String", required: true },
      time: { type: "Date", required: true },
    },
    free_seats: {
      type: "number",
    },
    price_per_seat: {
      km_price: {
        type: "number",
        required: true,
      },
      service_fee: {
        type: "number",
        required: true,
      },
      total: {
        type: "number",
        required: true,
        /*         default: km_price + service_fee,*/
      },
    },
    trip_duration: {
      type: "number",
      required: true,
      /*       default: (new Date(arrival.time) - new Date(departure.time)) / 3600000,*/
    },
    distance: {
      type: "number",
      required: true, // TODO Calculate distance between departure and arrival
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
