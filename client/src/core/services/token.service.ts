import jwt_decode from "jwt-decode";
import mem from "mem";

import { cookiesManager } from "../helpers";
import { AuthToken } from "../types";
import { publicAxios } from "./publicAxios.service";

const authToken = cookiesManager.getCookie("authToken");

// Function is memoized to prevent multiple calls to the same function
const refreshAuthToken = mem(
  async () => {
    const url = `${process.env?.REACT_APP_API_URL}/profile/refresh`;

    try {
      const response = await publicAxios.post(url, {
        body: JSON.stringify({
          authToken: authToken,
        }),
      });
      const data = await response.data;
      data.status = response.status;

      if (response.status === 200) {
        // Check in jwt token if remember me is true
        const decodedToken: AuthToken["data"] & AuthToken["meta"] = jwt_decode(
          data.authToken
        );
        if (decodedToken.rememberMe)
          cookiesManager.setCookie("authToken", data.authToken, true);
        else cookiesManager.setCookie("authToken", data.authToken, false);
      } else if (response.status === 401)
        cookiesManager.deleteCookie("authToken");
      window.location.href = "/profile/login";
      return data;
    } catch (error) {
      cookiesManager.deleteCookie("authToken");
      window.location.href = "/profile/login";
    }
  },
  { maxAge: 10000 }
);

const deleteRefreshToken = async (authToken: string) => {
  const url = `${process.env?.REACT_APP_API_URL}/profile/signout`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authToken: authToken,
      }),
    });
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (error) {
    return [];
  }
};

export const tokenService = {
  refreshAuthToken,
  deleteRefreshToken,
};
