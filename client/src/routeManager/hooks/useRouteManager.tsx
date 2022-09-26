import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

import { AuthToken, cookiesManager, LoggedUserDataProps } from "../../core";

type RouteManagerManager = {
  isUserLoggedIn: boolean;
  loggedUserData: LoggedUserDataProps["loggedUserData"];
  isUserAdmin: boolean;
  loading: boolean;
};

export const useRouteManager = (): RouteManagerManager => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [isUserAdmin, setIsUserAdmin] = useState<boolean>(false);
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
      if (decodedToken.role === "admin") setIsUserAdmin(true);
      setLoading(false);
    } else setLoading(false);
  }, []);

  return { isUserLoggedIn, loggedUserData, isUserAdmin, loading };
};
