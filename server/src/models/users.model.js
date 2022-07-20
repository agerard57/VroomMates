const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  name: {
    first_name: {
      type: "String",
    },
    last_name: {
      type: "String",
    },
  },
  email: {
    confirmed: {
      type: "Boolean",
    },
    email_address: {
      type: "String",
    },
  },
  password: {
    type: "String",
  },
  address: {
    house_number: {
      type: "Number",
    },
    street_name: {
      type: "String",
    },
    city: {
      type: "String",
    },
    state: {
      type: "String",
    },
    zip: {
      type: "Number",
    },
  },
  birth_date: {
    type: "Date",
  },
  about: {
    bio: {
      type: "String",
    },
    chatty: {
      type: "String",
    },
    music: {
      type: "String",
    },
    hobbies: {
      type: ["String"],
    },
  },
  photo_url: {
    type: "String",
  },
  stripe_id: {
    type: "String",
  },
  registered_since: {
    type: "Date",
  },
  is_admin: {
    type: "Boolean",
  },
}, { collection: 'Users' });

userSchema.index({ username: 1 }, { unique: true });

userSchema.plugin(uniqueValidator);

const UsersModel = mongoose.model("Users", userSchema);

module.exports = UsersModel;
