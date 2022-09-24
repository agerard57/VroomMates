import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

import { AuthToken, cookiesManager, LoggedUserDataProps } from "../../core";

type RouteManagerManager = {
  isUserLoggedIn: boolean;
  loggedUserData: LoggedUserDataProps["loggedUserData"];
};

export const useRouteManager = (): RouteManagerManager => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [loggedUserData, setLoggedUserData] =
    useState<LoggedUserDataProps["loggedUserData"]>(null);

  useEffect(() => {
    const cookie = cookiesManager.getCookie("authToken");

    if (cookie) {
      const decodedToken: AuthToken["data"] & AuthToken["meta"] =
        jwt_decode(cookie);

      setLoggedUserData(decodedToken);
      setIsUserLoggedIn(true);
    }
  }, [cookiesManager.getCookie("authToken")]);

  return { isUserLoggedIn, loggedUserData };
};
