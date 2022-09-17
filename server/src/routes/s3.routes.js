const s3Controller = require("../controllers/s3.controller");
const authJwt = require("../middlewares/authJwt");
const multer = require("multer");
const upload = multer({ dest: "./uploads" });

module.exports = function (app) {
  app
    .route("/photo/upload")
    .post(
      [authJwt.isUserLogged],
      upload.single("file"),
      s3Controller.postProfilePicture
    );
};
