import { privateAxios } from "../../core";
import { CarInputs } from "../types";

const url = `${process.env?.REACT_APP_API_URL}/driver/car`;

export const postCar = async (inputs: CarInputs) => {
  try {
    const response = await privateAxios.post(url, JSON.stringify(inputs));
    const data = await response.data;
    data.status = response.status;

    return data;
  } catch (error) {
    return [];
  }
};
