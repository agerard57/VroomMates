import { UserTypes } from "./UserTypes";

type AuthTokenData = {
  id: string;
  name: {
    first_name: string;
    last_name: string;
  };
  confirmedEmail: boolean;
  photoUrl: string;
  avgRating: number;
  role: UserTypes["Status"];
};

type AuthTokenMeta = {
  rememberMe: boolean;
  iat: number;
  exp: number;
  aud: string;
  iss: string;
  sub: string;
};

export interface AuthToken {
  data: AuthTokenData | null;
  meta: AuthTokenMeta;
}

export type LoggedUserDataProps = {
  loggedUserData: AuthTokenData | null;
};
