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
  require("./driver.routes")(app);
  require("./landingPage.routes")(app);
  require("./profileBanner.routes")(app);
  require("./profile.routes")(app);
  require("./s3.routes")(app);
  require("./searchPage.routes")(app);
  require("./profilePage.routes")(app);
  require("./reviewsPages.routes")(app);
  require("./trips.routes")(app);
};
