import { UserType } from "../types";

export interface ProfileHeader {
  user: {
    firstName: string;
    lastName: string;
    profilePicSrc: string;
    dateOfBirth: Date;
    status: UserType["Status"];
  };
  stats: {
    avgRating?: number;
    nbTripsCreated: number;
    nbTripsParticipated: number;
  };
}

export const ProfileHeaderInitializer: ProfileHeader = {
  user: {
    firstName: "",
    lastName: "",
    profilePicSrc:
      "https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png", //TODO Use own default avatar",
    dateOfBirth: new Date("2000-01-01T00:00:00Z"),
    status: "passenger" as UserType["Status"],
  },
  stats: {
    avgRating: 0,
    nbTripsCreated: 0,
    nbTripsParticipated: 0,
  },
};
