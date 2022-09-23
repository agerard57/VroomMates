const TripsModel = require("../models/trips.model");

exports.addTrip = async (req, res) => {
  const userId = res.locals.user.id;
  const {
    type,
    departure,
    arrival,
    free_seats,
    price_per_seat,
    distance,
    frequent_trip_options,
    trip_duration,
  } = req.body;

  const newTrip = new TripsModel(
    type === "frequent"
      ? {
          driver: userId,
          type,
          departure,
          arrival,
          free_seats,
          price_per_seat,
          distance,
          trip_duration,
          frequent_trip_options,
          status: "confirmed",
        }
      : {
          driver: userId,
          type,
          departure,
          arrival,
          free_seats,
          price_per_seat,
          distance,
          trip_duration,
          status: "confirmed",
        }
  );

  try {
    await newTrip.save();

    res.status(201).json({ message: "message.success" });
  } catch (error) {
    res.status(500).json({ message: "message.error" });
  }
};
