// Update trigger that checks every minutes if frequent trips is done
// If type === "frequent", status not done or canceled and frequent_trip_options.end_date < now, set status to "done"

exports = function () {
  const collection = context.services
    .get("MNS")
    .db("VroomMates")
    .collection("Trips");

  const now = new Date();

  const query = {
    type: "frequent",
    status: { $nin: ["done", "canceled"] },
    "frequent_trip_options.end_date": { $lt: now },
  };

  const update = {
    $set: {
      status: "done",
    },
  };

  return collection.updateMany(query, update);
};
