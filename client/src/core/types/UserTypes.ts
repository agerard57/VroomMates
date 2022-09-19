type Status = "passenger" | "driver" | "admin" | "banned" | undefined;

type Review = {
  author: {
    name: {
      first_name: string;
      last_name: string;
    };
  };
  message: string;
  rating: number;
  date: Date;
};

export interface UserTypes {
  Status: Status;
  Review: Review;
}
