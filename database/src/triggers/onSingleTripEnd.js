// Update trigger that checks every minutes if frequent trips is done
// If type === "frequent" and frequent_trip_options.end_date < now, set status to "done"

exports = function () {
  const collection = context.services
    .get("MNS")
    .db("VroomMates")
    .collection("Trips");

  const now = new Date();

  const query = {
    type: "single",
    status: { $nin: ["done", "canceled"] },
    "arrival.time": { $lt: now },
  };

  const update = {
    $set: {
      status: "done",
    },
  };

  return collection.updateMany(query, update);
};
