import { publicAxios } from "../../core";

const url = `${process.env?.REACT_APP_API_URL}/home`;

export const getStats = async () => {
  try {
    const response = await publicAxios.get(url);
    return await response.data;
  } catch (error) {
    return [];
  }
};
