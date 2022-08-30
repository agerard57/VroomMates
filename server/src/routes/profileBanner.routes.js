const profileBannerController = require("../controllers/profileBanner.controller");

module.exports = function (app) {
  app
    .route("/banner/photo/:id([0-9a-f]{24})")
    .get(profileBannerController.getProfilePicSrc);

  app
    .route("/banner/user/:id([0-9a-f]{24})")
    .get(profileBannerController.getUserData);
};
