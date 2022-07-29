const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

module.exports = function routes(app) {
  // /////////////////////////
  // Middlewares instantiated
  app.use(cors());
  app.use(morgan("tiny"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // ///////
  // Routes
  require("./drivers.routes")(app);
  require("./chatRooms.routes")(app);
  require("./users.routes")(app);
  require("./trips.routes")(app);
  require("./notifications.routes")(app);

  require("./landingPage.routes")(app);
};
