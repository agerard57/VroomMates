db.createCollection('Chat_Rooms', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Chat_Rooms',
        required: ['chat_id', 'trip_id', 'passenger_id', 'content'],
        properties: {
          chat_id: {
            bsonType: 'objectId'
          },
          trip_id: {
            bsonType: 'objectId'
          },
          passenger_id: {
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
  db.Chat_Rooms.createIndex()