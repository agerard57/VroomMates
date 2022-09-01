const authController = require("../controllers/auth.controller");
const checkRegister = require("../middlewares/checkRegister");
const checkLogin = require("../middlewares/checkLogin");

module.exports = function (app) {
  app
    .route("/profile/register")
    .post(
      [
        checkRegister.checkDuplicateUser,
        checkRegister.checkEmail,
        checkRegister.checkPassword,
        checkRegister.checkDifferentPasswords,
      ],
      authController.register
    );

  app
    .route("/profile/login")
    .post(
      [
        checkLogin.checkEmail,
        checkLogin.checkPasswordSyntax,
        checkLogin.checkUserExistsAndValidPassword,
      ],
      authController.login
    );
};
