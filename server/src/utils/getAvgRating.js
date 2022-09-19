const getAvgRating = (ratings) => {
  if (ratings && ratings.length > 0) {
    const ratingsMark = ratings.map((rating) => parseInt(rating.rating));
    return (
      ratingsMark.reduce((acc, curr) => acc + curr, 0) / ratingsMark.length
    );
  }
  return null;
};

// TODO Implement this wherever it needs to be used

module.exports = getAvgRating;
