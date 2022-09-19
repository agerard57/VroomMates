import { cookiesManager } from "../../core";

const url = `${process.env?.REACT_APP_API_URL}/driver/requested`;

export const getHasUserRequestedAlready = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        "x-access-token": cookiesManager.getCookie("authToken"),
      },
    });
    return await response.json();
  } catch (error) {
    return [];
  }
};
