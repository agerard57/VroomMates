interface Review {
  author: {
    name?: {
      first_name: string;
      last_name: string;
    };
  };
  message: string;
  rating: number;
  date: Date;
}

export interface User {
  review: Review;
}

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

export const UserInitializer = {
  review: ReviewInitializer,
};
