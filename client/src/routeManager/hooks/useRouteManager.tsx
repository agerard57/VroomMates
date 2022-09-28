import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

import {
  AuthToken,
  cookiesManager,
  LoggedUserDataProps,
  UserTypes,
} from "../../core";

type RouteManagerManager = {
  isUserLoggedIn: boolean;
  loggedUserData: LoggedUserDataProps["loggedUserData"];
  userRole: UserTypes["Status"];
  loading: boolean;
};

export const useRouteManager = (): RouteManagerManager => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<UserTypes["Status"]>("visitor");
  const [loggedUserData, setLoggedUserData] =
    useState<LoggedUserDataProps["loggedUserData"]>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const cookie = cookiesManager.getCookie("authToken");

    if (cookie) {
      const decodedToken: AuthToken["data"] & AuthToken["meta"] =
        jwt_decode(cookie);

      setLoggedUserData(decodedToken);
      setIsUserLoggedIn(true);
      setUserRole(decodedToken.role);
      setLoading(false);
    } else setLoading(false);
  }, []);

  return { isUserLoggedIn, loggedUserData, userRole, loading };
};
