const addPassenger = require("./addPassenger.controller");
const cancelTrip = require("./cancelTrip.controller");
const getTripDetailsById = require("./getTripDetailsById.controller");
const removePassenger = require("./removePassenger.controller");

module.exports = {
  addPassenger,
  cancelTrip,
  getTripDetailsById,
  removePassenger,
};
