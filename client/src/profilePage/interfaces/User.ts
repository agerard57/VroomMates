import { Status } from "../../core";

interface About {
  bio: string;
  chatty: boolean;
  music: boolean;
  animals_tolerated: boolean;
  hobbies: string[];
}

export interface Review {
  author: {
    name: {
      first_name: string;
      last_name: string;
    };
  };
  message: string;
  rating: number;
  date: Date;
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
  status: Status;
  ratings: Review[];
  car?: Car;
  avg_rating: number;
  nb_trips_created: number;
  nb_trips_participated: number;
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
  photo_url:
    "https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png", //TODO Use own default avatar
  status: "passenger" as Status,
  ratings: [ReviewInitializer],
  car: CarInitializer,
  avg_rating: 0,
  nb_trips_created: 0,
  nb_trips_participated: 0,
};
