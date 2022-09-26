const UsersModel = require("../../models/users.model");

module.exports = (req, res) => {
  const { bio, chatty, music, animals_tolerated, hobbies } = req.body;

  UsersModel.findOneAndUpdate(
    { _id: res.locals.user.id },
    {
      $set: {
        about: {
          bio,
          chatty,
          music,
          animals_tolerated,
          hobbies,
        },
      },
    }
  )
    .then((_user) => {
      res.status(200).json({ message: "messages.about.updated" });
    })
    .catch((err) => {
      res.status(500).json({ message: "message.about.error" });
    });
};
