const searchPageController = require("../controllers/searchPage.controller");

module.exports = function (app) {
  app.route("/search").get(searchPageController.getSearchResults);
};
