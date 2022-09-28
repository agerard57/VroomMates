import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

import { AuthToken, cookiesManager, LoggedUserDataProps } from "../../core";

type RouteManagerManager = {
  isUserLoggedIn: boolean;
  loggedUserData: LoggedUserDataProps["loggedUserData"];
  loading: boolean;
};

export const useRouteManager = (): RouteManagerManager => {
  const [loggedUserData, setLoggedUserData] =
    useState<LoggedUserDataProps["loggedUserData"]>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const cookie = cookiesManager.getCookie("authToken");

    if (cookie) {
      const decodedToken: AuthToken["data"] & AuthToken["meta"] =
        jwt_decode(cookie);

      setLoggedUserData(decodedToken);
      setLoading(false);
    } else setLoading(false);
  }, []);

  const isUserLoggedIn =
    loggedUserData?.role !== "visitor" || loggedUserData?.role === undefined;

  return { isUserLoggedIn, loggedUserData, loading };
};
