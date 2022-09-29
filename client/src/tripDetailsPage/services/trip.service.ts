import { privateAxios, publicAxios } from "../../core";

const url = (id: string) => `${process.env?.REACT_APP_API_URL}/trip/${id}`;

export const getTrip = async (id: string) => {
  try {
    const response = await publicAxios.get(url(id));
    return await response.data;
  } catch (error) {
    return [];
  }
};

export const cancelTrip = async (id: string) => {
  try {
    const response = await privateAxios.delete(url(id));
    return await response.data;
  } catch (error) {
    return [];
  }
};
