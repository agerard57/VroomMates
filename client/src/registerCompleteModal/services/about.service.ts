import { privateAxios } from "../../core";
import { AboutInputs } from "../types";

const url = `${process.env?.REACT_APP_API_URL}/profile/edit/about`;

export const postAbout = async (inputs: AboutInputs) => {
  try {
    const response = await privateAxios.put(url, {
      body: JSON.stringify(inputs),
    });
    const data = await response.data;
    data.status = response.status;

    return data;
  } catch (error) {
    return [];
  }
};
