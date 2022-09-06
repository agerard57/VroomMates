import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

import { AuthToken, cookiesManager, tokenService } from "../../core";

type RouteManagerManager = {
  isUserLoggedIn: boolean;
  loggedUserData: AuthToken["data"] | null;
  isLoading: boolean;
};

export const useRouteManager = (): RouteManagerManager => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [loggedUserData, setLoggedUserData] = useState<
    AuthToken["data"] | null
  >(null);

  useEffect(() => {
    const cookie = cookiesManager.getCookie("authToken");

    if (cookie) {
      const currentDate = new Date();
      const decodedToken: AuthToken["data"] & AuthToken["meta"] =
        jwt_decode(cookie);

      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        tokenService.refreshAuthToken(cookie).then((response) => {
          if (response.status === 200) {
            cookiesManager.setCookie("authToken", response.authToken, true);
            setLoggedUserData(response.data);
            setIsUserLoggedIn(true);
            setIsLoading(false);
          }
        });
      } else {
        setLoggedUserData(decodedToken);
        setIsUserLoggedIn(true);
        setIsLoading(false);
      }
    }
    setIsLoading(false);
  }, []);

  return { isUserLoggedIn, loggedUserData, isLoading };
};
