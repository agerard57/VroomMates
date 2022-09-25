const UsersModel = require("../models/users.model");

exports.getGivenReviewsByUserId = (req, res) => {
  const userId = req.params.id;
  UsersModel.find({ "ratings.author": userId })
    .select("-_id ratings")
    .then((user) => {
      if (user[0].ratings && user[0].ratings.length > 0) {
        // Only get the ratings that the user has given
        const ratings = user[0].ratings.filter(
          // eslint-disable-next-line eqeqeq
          (rating) => rating.author == userId
        );
        res.status(200).json(ratings);
      } else res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.getReceivedReviewsByUserId = (req, res) => {
  UsersModel.findById(req.params.id)
    .select("-_id ratings")
    .populate({
      path: "ratings.author",
      model: "Users",
      select: "-_id name",
    })
    .lean()
    .then((user) => {
      // Check if user.ratings exists and not empty
      if (user.ratings && user.ratings.length > 0) {
        user.ratings.forEach((rating) => {
          if (rating.author === null) rating.author = "deleted";
          else
            rating.author.name.last_name = `${rating.author.name.last_name.charAt(
              0
            )}.`;
          rating.rating = parseInt(rating.rating, 10);
        });
      }
      res.status(200).json(user.ratings);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
