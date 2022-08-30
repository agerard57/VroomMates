const reviewsPagesController = require("../controllers/reviewsPages.controller");

module.exports = function (app) {
  app
    .route("/reviews/given/:id([0-9a-f]{24})")
    .get(reviewsPagesController.getGivenReviewsByUserId);

  app
    .route("/reviews/received/:id([0-9a-f]{24})")
    .get(reviewsPagesController.getReceivedReviewsByUserId);
};
