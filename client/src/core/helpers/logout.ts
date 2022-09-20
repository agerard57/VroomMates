import { tokenService } from "../services";
import { cookiesManager } from "./cookiesManager";

export const logout = () => {
  tokenService.deleteRefreshToken(cookiesManager.getCookie("authToken"));
  cookiesManager.deleteCookie("authToken");
  window.location.href = "/";
};
