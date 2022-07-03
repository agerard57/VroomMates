db.createCollection('Notifications', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Notifications',
      required: ['notification_id', 'user_id', 'content'],
      properties: {
        notification_id: {
          bsonType: 'objectId'
        },
        user_id: {
          bsonType: 'objectId'
        },
        content: {
          bsonType: 'array',
          items: {
            title: 'content',
            required: ['author_id', 'message', 'date'],
            properties: {
              author_id: {
                bsonType: 'objectId'
              },
              message: {
                bsonType: 'string'
              },
              is_read: {
                bsonType: 'bool'
              },
              date: {
                bsonType: 'date'
              }
            }
          }
        }
      }
    }
  },
  autoIndexId: true
});
db.Notifications.createIndex()