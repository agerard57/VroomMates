import { LoggedUserDataProps } from "../../core";
import { User } from "../interfaces";

// u2u : user to user
// a2u : admin to user
// a2a : admin to admin
// a2b : admin to banned
// up : user profile
export type PageType = "u2u" | "a2u" | "a2a" | "a2b" | "up";

export type UseProfilePageManager = (
  loggedUserData: LoggedUserDataProps["loggedUserData"]
) => { user: User; pageType: PageType; banUserHandler: () => void };
