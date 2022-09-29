import { privateAxios } from "../../core";

export const addPassenger = async (id: string) => {
  const url = (id: string) =>
    `${process.env?.REACT_APP_API_URL}/passenger/add/${id}`;

  try {
    const response = await privateAxios.put(url(id));
    return await response.data;
  } catch (error) {
    return [];
  }
};

export const removePassenger = async (id: string) => {
  const url = (id: string) =>
    `${process.env?.REACT_APP_API_URL}/passenger/remove/${id}`;

  try {
    const response = await privateAxios.put(url(id));
    return await response.data;
  } catch (error) {
    return [];
  }
};
