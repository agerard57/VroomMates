const authController = require("../controllers/auth.controller");
const checkRegister = require("../middlewares/checkRegister");
const checkLogin = require("../middlewares/checkLogin");

module.exports = function (app) {
  app
    .route("/profile/register")
    .post(
      [
        checkRegister.checkFields,
        checkRegister.checkDuplicateUser,
        checkRegister.checkEmail,
        checkRegister.checkPassword,
        checkRegister.checkDifferentPasswords,
        checkRegister.checkBirthDate,
        checkRegister.checkTermsChecked,
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

  app.route("/profile/refresh").post(authController.refresh);

  app.route("/profile/signout").post(authController.signOut);
};
