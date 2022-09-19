import { s3UrlBuilder } from "../helpers";
import { UserTypes } from "../types";

export interface ProfileHeader {
  user: {
    firstName: string;
    lastName: string;
    profilePicSrc: string;
    dateOfBirth: Date;
    status: UserTypes["Status"];
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
    profilePicSrc: s3UrlBuilder(),
    dateOfBirth: new Date("2000-01-01T00:00:00Z"),
    status: "passenger" as UserTypes["Status"],
  },
  stats: {
    avgRating: 0,
    nbTripsCreated: 0,
    nbTripsParticipated: 0,
  },
};
