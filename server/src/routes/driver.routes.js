const driverController = require("../controllers/driver.controller");
const authJwt = require("../middlewares/authJwt");
const multer = require("multer");
const upload = multer({
  dest: "./driversLicenses",
  limits: { fileSize: 5000000 },
});

module.exports = function (app) {
  app.route("/driver/car").put([authJwt.isUserLogged], driverController.putCar);

  app
    .route("/driver/license")
    .post(
      [authJwt.isUserLogged],
      upload.single("file"),
      driverController.postDriverLicense
    );

  app
    .route("/driver/requested")
    .get([authJwt.isUserLogged], driverController.getHasUserRequestedAlready);
};
