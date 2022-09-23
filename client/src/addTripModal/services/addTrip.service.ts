import { cookiesManager } from "../../core";
import { TripInputs } from "../interfaces";

const url = `${process.env?.REACT_APP_API_URL}/trip`;

export const postTrip = async (tripInputs: TripInputs) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": cookiesManager.getCookie("authToken"),
      },
      body: JSON.stringify(tripInputs),
    });
    const data = await response.json();
    data.status = response.status;

    return data;
  } catch (error) {
    return [];
  }
};
