import { cookiesManager } from "../helpers";

export const getProfilePicSrc = async (id: string) => {
  const url = (id: string) =>
    `${process.env?.REACT_APP_API_URL}/banner/photo/${id}`;
  try {
    const response = await fetch(url(id), {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "x-access-token": cookiesManager.getCookie("authToken"),
      }),
    });

    return await response.json();
  } catch (error) {
    return [];
  }
};

export const getUserData = async (id: string) => {
  const url = (id: string) =>
    `${process.env?.REACT_APP_API_URL}/banner/user/${id}`;
  try {
    const response = await fetch(url(id), {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "x-access-token": cookiesManager.getCookie("authToken"),
      }),
    });

    return await response.json();
  } catch (error) {
    return [];
  }
};
