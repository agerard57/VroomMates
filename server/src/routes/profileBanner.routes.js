const profileBannerController = require("../controllers/profileBanner.controller");
const authJwt = require("../middlewares/authJwt");

module.exports = function (app) {
  app
    .route("/banner/photo/:id([0-9a-f]{24})")
    .get([authJwt.isUserLogged], profileBannerController.getProfilePicSrc);

  app
    .route("/banner/user/:id([0-9a-f]{24})")
    .get([authJwt.isUserLogged], profileBannerController.getUserData);
};
