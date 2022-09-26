const UsersModel = require("../../models/users.model");

module.exports = (req, res) => {
  const { id } = req.params;
  // If user.status !== "banned", ban the user, else unban the user
  UsersModel.findById(id, (err, user) => {
    if (err) {
      res.status(500).json({ message: "message.error" });
      return;
    }
    if (user.status === "banned") {
      UsersModel.findOneAndUpdate(
        { _id: id },
        { $set: { status: "passenger" } },
        (err, _user) => {
          if (err) {
            res.status(500).json({ message: "message.error" });
            return;
          }
          res.status(200).json({ message: "message.success" });
        }
      );
    } else {
      UsersModel.findOneAndUpdate(
        { _id: id },
        { $set: { status: "banned" } },
        (err, _user) => {
          if (err) {
            res.status(500).json({ message: "message.error" });
            return;
          }
          res.status(200).json({ message: "message.success" });
        }
      );
    }
  });
};
