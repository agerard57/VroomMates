import { privateAxios } from "../../core";

const url = (id: string) => `${process.env?.REACT_APP_API_URL}/passenger/${id}`;

export const removePassenger = async (id: string) => {
  try {
    const response = await privateAxios.put(url(id));
    return await response.data;
  } catch (error) {
    return [];
  }
};
