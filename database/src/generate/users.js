db.createCollection('Users', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Users',
        required: ['user_id', 'name', 'email', 'password', 'phone_number', 'address', 'birth_date', 'registered_since', 'role_status'],
        properties: {
          user_id: {
            bsonType: 'objectId'
          },
          name: {
            bsonType: 'object',
            title: 'name',
            required: ['first_name', 'last_name'],
            properties: {
              first_name: {
                bsonType: 'string'
              },
              last_name: {
                bsonType: 'string'
              }
            }
          },
          email: {
            bsonType: 'object',
            title: 'email',
            required: ['confirmed', 'email_address'],
            properties: {
              confirmed: {
                bsonType: 'bool'
              },
              email_address: {
                bsonType: 'string'
              }
            }
          },
          password: {
            bsonType: 'string'
          },
          phone_number: {
            bsonType: 'string'
          },
          address: {
            bsonType: 'object',
            title: 'address',
            required: ['house_number', 'street_name', 'city', 'state', 'zip', 'country'],
            properties: {
              house_number: {
                bsonType: 'int'
              },
              street_name: {
                bsonType: 'string'
              },
              city: {
                bsonType: 'string'
              },
              state: {
                bsonType: 'string'
              },
              zip: {
                bsonType: 'int'
              },
              country: {
                bsonType: 'string'
              }
            }
          },
          birth_date: {
            bsonType: 'date'
          },
          about: {
            bsonType: 'object',
            title: 'about',
            properties: {
              bio: {
                bsonType: 'string'
              },
              chatty: {
                bsonType: 'bool'
              },
              music: {
                bsonType: 'bool'
              },
              hobbies: {
                bsonType: 'array',
                items: {
                  bsonType: 'string'
                }
              }
            }
          },
          photo_url: {
            bsonType: 'string'
          },
          stripe_id: {
            bsonType: 'string'
          },
          ratings: {
            bsonType: 'array',
            items: {
              title: 'ratings',
              required: ['rating', 'author_id', 'date'],
              properties: {
                rating: {
                  bsonType: 'int'
                },
                content: {
                  bsonType: 'string'
                },
                author_id: {
                  bsonType: 'objectId'
                },
                date: {
                  bsonType: 'date'
                }
              }
            }
          },
          registered_since: {
            bsonType: 'date'
          },
          role_status: {
            bsonType: 'string'
          }
        }
      }
    },
    autoIndexId: true
  });
  db.Users.createIndex()