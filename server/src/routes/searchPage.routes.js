const searchPageController = require("../controllers/searchPage.controller");
const checkTripSearch = require("../middlewares/checkTripSearch");

module.exports = function (app) {
  app
    .route("/search")
    .get(
      [checkTripSearch.hasEveryFieldBeenFilled],
      searchPageController.getSearchResults
    );
};
