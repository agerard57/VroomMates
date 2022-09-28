const TripsModel = require("../../models/trips.model");
const DriversModel = require("../../models/drivers.model");

module.exports = (req, res) => {
  TripsModel.findById(req.params.id, {
    "price_per_seat.driver_fee": 0,
    "price_per_seat.service_fee": 0,
  })
    .populate({
      path: "driver",
      model: "Users",
      select: "name.first_name email.confirmed photo_url ratings",
    })
    .populate({
      path: "passengers",
      model: "Users",
      select: "_id name.first_name photo_url",
    })
    .lean()
    .exec((_err, trip) => {
      try {
        trip.passengers.forEach((passenger) => {
          passenger.first_name = passenger.name.first_name;
        });
        trip.passengers.forEach((passenger) => {
          // For some reason, passenger.name can not be deleted
          // in the same forEach than the one above
          delete passenger.name;
        });
        const getAvgRating = (ratings) => {
          const mappedRatings = ratings.map((rating) =>
            parseInt(rating.rating, 10)
          );
          return (
            mappedRatings.reduce((acc, curr) => acc + curr, 0) / ratings.length
          );
        };
        DriversModel.find({ user: trip.driver._id }).then((driver) => {
          trip.driver = {
            id: trip.driver._id,
            photo_url: trip.driver.photo_url,
            avgRating: getAvgRating(trip.driver.ratings),
            nbRatings: trip.driver.ratings.length,
            first_name: trip.driver.name.first_name,
            confirmed_email: trip.driver.email.confirmed,
            car: driver[0].car,
          };
          res.status(200).json(trip);
        });
      } catch (err) {
        res.status(404).json(err);
      }
    });
};
