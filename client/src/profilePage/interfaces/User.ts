import { s3UrlBuilder, UserTypes } from "../../core";

interface About {
  bio: string;
  chatty: boolean;
  music: boolean;
  animals_tolerated: boolean;
  hobbies: string[];
}

interface Car {
  brand: string;
  model: string;
  color: string;
}

export interface User {
  _id: string;
  name: {
    first_name: string;
    last_name: string;
  };
  email: {
    confirmed: boolean;
  };
  birth_date: Date;
  about?: About;
  photo_url: string;
  status: UserTypes["Status"];
  ratings: UserTypes["Review"][];
  car?: Car;
}

const AboutInitializer = {
  bio: "",
  chatty: false,
  music: false,
  animals_tolerated: false,
  hobbies: [],
};

const ReviewInitializer = {
  author: {
    name: {
      first_name: "",
      last_name: "",
    },
  },
  message: "",
  rating: 0,
  date: new Date("2000-01-01T00:00:00Z"),
};

const CarInitializer = {
  brand: "",
  model: "",
  color: "",
};

export const UserInitializer = {
  _id: "",
  name: {
    first_name: "",
    last_name: "",
  },
  email: {
    confirmed: false,
  },
  birth_date: new Date("2000-01-01T00:00:00Z"),
  about: AboutInitializer,
  photo_url: s3UrlBuilder(),
  status: "passenger" as UserTypes["Status"],
  ratings: [ReviewInitializer],
  car: CarInitializer,
};
