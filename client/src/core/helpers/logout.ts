import { tokenService } from "../services";
import { cookiesManager } from "./cookiesManager";

export const logout = async () => {
  await tokenService
    .deleteRefreshToken(cookiesManager.getCookie("authToken"))
    .then(() => {
      cookiesManager.deleteCookie("authToken");
      window.location.href = "/";
    });
};
