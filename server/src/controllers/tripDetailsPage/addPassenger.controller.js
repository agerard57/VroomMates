const TripsModel = require("../../models/trips.model");

// Add passenger from trip
module.exports = (req, res) => {
  const userId = res.locals.user.id;

  TripsModel.findById(req.params.id)
    .then((trip) => {
      if (trip.passengers.indexOf(userId) === -1) {
        trip.passengers.push(userId);
      }
      trip.save();
      res.status(204).json(trip);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};
