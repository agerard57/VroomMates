import axios from "axios";

import { cookiesManager } from "../helpers";
import { tokenService } from "./token.service";

const authToken = cookiesManager.getCookie("authToken");

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(
  async (config) => {
    if (authToken && config.headers && !config.headers["x-access-token"])
      config.headers = {
        ...config.headers,
        "x-access-token": authToken,
      };

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;
    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;
      const result = await tokenService.refreshAuthToken();
      if (result.status === 200)
        config.headers["x-access-token"] = result.authToken;

      return axios(config);
    }
    return Promise.reject(error);
  }
);

export const privateAxios = axios;
