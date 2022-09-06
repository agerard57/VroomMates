type AuthTokenData = {
  id: string;
  name: {
    first_name: string;
    last_name: string;
  };
  confirmedEmail: boolean;
  photoUrl: string;
  role: string;
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
  data: AuthTokenData;
  meta: AuthTokenMeta;
}
