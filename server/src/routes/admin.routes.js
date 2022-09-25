const adminUserListPageController = require("../controllers/adminUserList.controller");
const authJwt = require("../middlewares/authJwt");

module.exports = (app) => {
  app
    .route("/admin/users")
    .get(
      [authJwt.isUserLogged, authJwt.isAdmin],
      adminUserListPageController.getUsers
    );
};
