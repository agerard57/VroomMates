import { privateAxios } from "../../core";
import { TripInputs } from "../interfaces";

const url = `${process.env?.REACT_APP_API_URL}/trip`;

export const postTrip = async (tripInputs: TripInputs) => {
  try {
    const response = await privateAxios.post(url, JSON.stringify(tripInputs));
    const data = await response.data;
    data.status = response.status;

    return data;
  } catch (error) {
    return [];
  }
};
