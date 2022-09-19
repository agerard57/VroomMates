import { cookiesManager } from "../../core";
import { AboutInputs } from "../types";

const url = `${process.env?.REACT_APP_API_URL}/profile/edit/about`;

export const postAbout = async (inputs: AboutInputs) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": cookiesManager.getCookie("authToken"),
      },
      body: JSON.stringify(inputs),
    });
    const data = await response.json();
    data.status = response.status;

    return data;
  } catch (error) {
    return [];
  }
};
