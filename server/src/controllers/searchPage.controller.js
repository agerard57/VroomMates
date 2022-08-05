const TripsModel = require("../models/trips.model");

exports.getSearchResults = (req, res) => {
  const axios = require("axios");
  const mapboxToken = require("../config/mapbox.config");
  const { type, departureLocation, arrivalLocation, date } = req.query;
  const departureUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${departureLocation}.json?access_token=${mapboxToken}`;
  const arrivalUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${arrivalLocation}.json?access_token=${mapboxToken}`;
  axios.get(departureUrl).then((response) => {
    const departureCoordinates = response.data.features[0].center;
    axios.get(arrivalUrl).then((response) => {
      const arrivalCoordinates = response.data.features[0].center;
      TripsModel.find(
        {
          type: type,
          "departure.location": {
            $geoWithin: {
              $centerSphere: [departureCoordinates.reverse(), 33.7 / 6371],
            },
          },
          "arrival.location": {
            $geoWithin: {
              $centerSphere: [arrivalCoordinates.reverse(), 33.7 / 6371],
            },
          },
          "departure.time": {
            $gte: date,
          },
          status: "confirmed",
        },
        {
          passengers: 0,
          "price_per_seat.km_price": 0,
          "price_per_seat.service_fee": 0,
          "departure.location._id": 0,
          "arrival.location._id": 0,
        }
      )
        .populate({
          path: "driver",
          select: "-_id name.first_name email.confirmed photo_url",
        })
        .then((trips) => {
          res.json(trips);
        })

        .catch((err) => {
          res.status(500).json({
            error: err,
          });
        });
    });
  });
};
