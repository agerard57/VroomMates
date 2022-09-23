db.createCollection("Trips", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "Trips",
      required: [
        "trip_id",
        "driver_id",
        "passengers",
        "type",
        "departure",
        "arrival",
        "free_seats",
        "price_per_seat",
        "trip_duration",
        "distance",
        "start_date",
        "end_date",
        "status",
      ],
      properties: {
        trip_id: {
          bsonType: "objectId",
        },
        driver_id: {
          bsonType: "objectId",
        },
        day_of_week: {
          bsonType: "array",
          items: {
            bsonType: "string",
          },
        },
        passengers: {
          bsonType: "array",
          items: {
            bsonType: "objectId",
          },
        },
        type: {
          bsonType: "string",
        },
        departure: {
          bsonType: "object",
          title: "point",
          required: ["location", "time"],
          properties: {
            location: {
              bsonType: "object",
              title: "geojson",
              required: ["type", "coordinates"],
              properties: {
                type: {
                  bsonType: "string",
                },
                coordinates: {
                  bsonType: "array",
                  items: {
                    bsonType: "string",
                  },
                },
              },
            },
            time: {
              bsonType: "date",
            },
          },
        },
        arrival: {
          bsonType: "object",
          title: "point",
          required: ["location", "time"],
          properties: {
            location: {
              bsonType: "object",
              title: "geojson",
              required: ["type", "coordinates"],
              properties: {
                type: {
                  bsonType: "string",
                },
                coordinates: {
                  bsonType: "array",
                  items: {
                    bsonType: "string",
                  },
                },
              },
            },
            time: {
              bsonType: "date",
            },
          },
        },
        free_seats: {
          bsonType: "int",
        },
        price_per_seat: {
          bsonType: "object",
          title: "price",
          required: ["driver_fee", "service_fee", "total"],
          properties: {
            driver_fee: {
              bsonType: "int",
            },
            service_fee: {
              bsonType: "int",
            },
            total: {
              bsonType: "int",
            },
          },
        },
        trip_duration: {
          bsonType: "int",
        },
        distance: {
          bsonType: "int",
        },
        start_date: {
          bsonType: "date",
        },
        end_date: {
          bsonType: "date",
        },
        status: {
          bsonType: "string",
        },
      },
    },
  },
  autoIndexId: true,
});
db.Trips.createIndex();
