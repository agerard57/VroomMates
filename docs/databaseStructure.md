# Database structure

## Users

```json
{
  "user_id": "ObjectId(Users)",
  "name": {
    "first_name": "string",
    "last_name": "string"
  },
  "email": {
    "confirmed": "boolean",
    "email_address": "string"
  },
  "password": "string",
  "phone_number": "string",
  "address": {
    "house_number": "int",
    "street_name": "string",
    "city": "string",
    "state": "string",
    "zip": "int",
    "country": "string"
  },
  "birth_date": "date",
  "about": {
    "bio": "string",
    "chatty": "boolean",
    "music": "boolean",
    "hobbies": "string[]"
  },
  "photo_url": "string",
  "stripe_id": "string",
  "ratings": [
    {
      "rating": "int",
      "content": "string",
      "author_id": "ObjectId(Users)",
      "date": "date"
    }
  ],
  "registered_since": "date",
  "status": "string",
  "refreshTokens": "sting[]"
}
```
