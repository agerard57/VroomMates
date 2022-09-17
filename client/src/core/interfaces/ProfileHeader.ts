import { s3UrlBuilder } from "../helpers";
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
    profilePicSrc: s3UrlBuilder("e6f5576639004a105dc76a6d0bbfb0d0"),
    dateOfBirth: new Date("2000-01-01T00:00:00Z"),
    status: "passenger" as UserType["Status"],
  },
  stats: {
    avgRating: 0,
    nbTripsCreated: 0,
    nbTripsParticipated: 0,
  },
};
