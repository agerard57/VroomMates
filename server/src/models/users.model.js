const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema(
  {
    name: {
      first_name: {
        type: "String",
        required: true,
      },
      last_name: {
        type: "String",
        required: true,
      },
    },
    email: {
      confirmed: {
        type: "Boolean",
        default: false,
        required: true,
      },
      email_address: {
        type: "String",
        required: true,
      },
    },
    password: {
      type: "String",
      required: true,
    },
    address: {
      house_number: {
        type: "Number",
        required: true,
      },
      street_name: {
        type: "String",
        required: true,
      },
      city: {
        type: "String",
        required: true,
      },
      state: {
        type: "String",
        required: true,
      },
      zip: {
        type: "Number",
        required: true,
      },
    },
    birth_date: {
      type: "Date",
      required: true,
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
        default: undefined,
      },
    },
    photo_url: {
      type: "String",
      default:
        "https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png",
      //TODO USE S3 PHOTO URL
    },
    stripe_id: "String",
    registered_since: {
      type: "Date",
      default: Date.now,
      required: true,
    },
    status: {
      type: "String",
      enum: ["passenger", "driver", "admin", "banned"],
      default: "passenger",
      required: true,
    },
    ratings: [
      {
        author: {
          type: "ObjectId",
          ref: "Users",
          required: true,
        },
        message: {
          type: "String",
        },

        rating: {
          type: "Number",
          required: true,
        },
        date: {
          type: "Date",
          default: Date.now,
          required: true,
        },
      },
    ],
    refreshTokens: {
      type: [String],
      default: undefined,
      required: false,
    },
  },
  { collection: "Users" }
);

userSchema.index({ id: 1 }, { unique: true });

userSchema.plugin(uniqueValidator);

const UsersModel = mongoose.model("Users", userSchema);

module.exports = UsersModel;
