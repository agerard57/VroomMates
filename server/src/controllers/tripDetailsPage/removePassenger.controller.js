const TripsModel = require("../../models/trips.model");

// Remove passenger from trip
module.exports = (req, res) => {
  const userId = res.locals.user.id;

  TripsModel.findById(req.params.id)
    .then((trip) => {
      const passengerIndex = trip.passengers.indexOf(userId);
      if (passengerIndex > -1) {
        trip.passengers.splice(passengerIndex, 1);
      }
      trip.save();
      res.status(204).json(trip);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};
