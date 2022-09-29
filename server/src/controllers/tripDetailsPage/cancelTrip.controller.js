const TripsModel = require("../../models/trips.model");
// Cancel trip
module.exports = (req, res) => {
  const userId = res.locals.user.id;
  TripsModel.findById(req.params.id)
    .then((trip) => {
      if (trip.driver.toString() === userId) {
        trip.status = "cancelled";
        trip.save();
        res.status(204).json(trip);
      } else {
        res.status(403).json("You are not the driver of this trip");
      }
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};
