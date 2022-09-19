const DriversModel = require("../models/drivers.model");

exports.postDriverLicense = async (req, res) => {
  const driver = new DriversModel({
    user: res.locals.user.id,
    status: "pending",
    license_card_filename: req.file.filename,
  });

  try {
    await driver.save();
    res.status(201).send({ message: "messages.driversLicense.uploaded" });
  } catch (err) {
    res.status(400).send({ message: "messages.driversLicense.error" });
  }
};

exports.putCar = async (req, res) => {
  const { brand, model, color } = req.body;
  const driver = res.locals.user.id;

  try {
    await DriversModel.findOneAndUpdate(
      { user: driver },
      { car: { brand, model, color } }
    );
    res.status(200).send({ message: "messages.car.updated" });
  } catch (err) {
    res.status(400).send({ message: "messages.car.error" });
  }
};

exports.getHasUserRequestedAlready = async (req, res) => {
  try {
    const driver = await DriversModel.findOne({ user: res.locals.user.id });
    if (driver) {
      res.status(200).send(true);
    } else {
      res.status(200).send(false);
    }
  } catch (err) {
    res.status(400).send(err);
  }
};
