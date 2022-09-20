import { cookiesManager } from "../../core";

const url = `${process.env?.REACT_APP_API_URL}/profile/close`;

export const deleteAccount = async () => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": cookiesManager.getCookie("authToken"),
      },
    });
    const data = await response.json();
    data.status = response.status;

    return data;
  } catch (error) {
    return [];
  }
};
