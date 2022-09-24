const reviewsPagesController = require("../controllers/reviewsPages.controller");
const authJwt = require("../middlewares/authJwt");

module.exports = (app) => {
  app
    .route("/reviews/given/:id([0-9a-f]{24})")
    .get(
      [authJwt.isUserLogged, authJwt.isSameUser],
      reviewsPagesController.getGivenReviewsByUserId
    );

  app
    .route("/reviews/received/:id([0-9a-f]{24})")
    .get(
      [authJwt.isUserLogged, authJwt.isSameUser],
      reviewsPagesController.getReceivedReviewsByUserId
    );
};
