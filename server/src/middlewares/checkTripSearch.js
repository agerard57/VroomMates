const hasEveryFieldBeenFilled = (req, res, next) => {
  const { type, departureLocation, arrivalLocation, date } = req.query;
  console.log(req.query);
  if (
    type !== "null" &&
    departureLocation !== "null" &&
    arrivalLocation !== "null" &&
    date !== "null"
  ) {
    next();
  } else {
    return res.status(400).send({
      message: "You must fill all the fields!",
    });
  }
};

const checkTripSearch = {
  hasEveryFieldBeenFilled,
};

module.exports = checkTripSearch;
