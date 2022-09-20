const profileController = require("../controllers/profile.controller");
const checkRegister = require("../middlewares/checkRegister");
const checkLogin = require("../middlewares/checkLogin");
const authJwt = require("../middlewares/authJwt");

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
      profileController.register
    );

  app
    .route("/profile/login")
    .post(
      [
        checkLogin.checkEmail,
        checkLogin.checkPasswordSyntax,
        checkLogin.checkUserExistsAndValidPassword,
      ],
      profileController.login
    );

  app
    .route("/profile/edit/about")
    .put([authJwt.isUserLogged], profileController.editAbout);

  app.route("/profile/refresh").post(profileController.refresh);

  app.route("/profile/signout").post(profileController.signOut);

  app
    .route("/profile/close")
    .delete([authJwt.isUserLogged], profileController.closeAccount);
};
