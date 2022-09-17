const UsersModel = require("../models/users.model");
const s3Services = require("../services/s3");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

exports.postProfilePicture = async (req, res) => {
  const { file } = req;
  const { deleteFile, uploadFile } = s3Services;

  UsersModel.findById(res.locals.user.id).then(async (user) => {
    if (
      user.photo_url &&
      user.photo_url !== "e6f5576639004a105dc76a6d0bbfb0d0"
    ) {
      deleteFile(user.photo_url);
    }

    const result = await uploadFile(file);

    await unlinkFile(file.path)
      .then(() => {
        UsersModel.findByIdAndUpdate(
          res.locals.user.id,
          { photo_url: result.Key },
          { new: true }
        ).then((_user, err) => {
          if (err) res.status(500).send(err);
          else
            return res
              .status(200)
              .send({ message: "messages.profilePic.uploaded" });
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });
};
