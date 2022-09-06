const getAvgRating = (ratings) => {
  if (ratings && ratings.length > 0) {
    const ratings = ratings.map((rating) => parseInt(rating.rating));
    return ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length;
  }
  return null;
};

// TODO Implement this wherever it needs to be used

module.exports = getAvgRating;
