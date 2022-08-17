const TripsModel = require("../models/trips.model");

exports.getSearchResults = (req, res) => {
  const axios = require("axios");
  const mapboxToken = require("../config/mapbox.config");
  const { type, departureLocation, arrivalLocation, date } = req.query;

  // Gets the coordinates of the departure location
  axios
    .get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${departureLocation}.json?access_token=${mapboxToken}`
    )
    .then((response) => {
      const departureCoordinates = response.data.features[0].center;

      // Gets the coordinates of the arrival location
      axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${arrivalLocation}.json?access_token=${mapboxToken}`
        )
        .then((response) => {
          const arrivalCoordinates = response.data.features[0].center;

          TripsModel.find(
            {
              // Filter by type
              type: type,
              // Filter by departure location
              "departure.location": {
                $geoWithin: {
                  $centerSphere: [departureCoordinates.reverse(), 33.7 / 6371],
                },
              },
              // Filter by arrival location
              "arrival.location": {
                $geoWithin: {
                  $centerSphere: [arrivalCoordinates.reverse(), 33.7 / 6371],
                },
              },
              // Filter by date
              "departure.time": {
                $gte: date,
              },
              // The status of a trip must be "confirmed"
              status: "confirmed",
            },
            {
              // Don't display the following fields
              passengers: 0,
              "price_per_seat.km_price": 0,
              "price_per_seat.service_fee": 0,
            }
          )

            // Populate the driver
            .populate({
              path: "driver",
              model: "Users",
              select: "-_id name.first_name email.confirmed photo_url ratings",
            })
            .lean()
            // Format the driver object / Get average rating
            .exec((_err, trips) => {
              trips.forEach((trip) => {
                const ratings = trip.driver.ratings.map((rating) =>
                  parseInt(rating.rating)
                );

                trip.driver = {
                  photo_url: trip.driver.photo_url,
                  avgRating:
                    ratings.reduce((acc, curr) => acc + curr, 0) /
                    ratings.length,
                  first_name: trip.driver.name.first_name,
                  confirmed_email: trip.driver.email.confirmed,
                };

                res.status(200).json(trips);
              });
            });
        });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
