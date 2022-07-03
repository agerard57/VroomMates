db.createCollection('Drivers', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Drivers',
      required: ['driver_id', 'user_id', 'status', 'car', 'licence_card_photo_url'],
      properties: {
        driver_id: {
          bsonType: 'objectId'
        },
        user_id: {
          bsonType: 'objectId'
        },
        status: {
          bsonType: 'string'
        },
        car: {
          bsonType: 'object',
          title: 'car',
          required: ['brandBrand', 'model'],
          properties: {
            brandBrand: {
              bsonType: 'string'
            },
            model: {
              bsonType: 'string'
            },
            color: {
              bsonType: 'string'
            }
          }
        },
        licence_card_photo_url: {
          bsonType: 'string'
        }
      }
    }
  },
  autoIndexId: true
});
db.Drivers.createIndex()