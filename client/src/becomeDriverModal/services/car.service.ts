import { cookiesManager } from "../../core";
import { CarInputs } from "../types";

const url = `${process.env?.REACT_APP_API_URL}/driver/car`;

export const postCar = async (inputs: CarInputs) => {
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
