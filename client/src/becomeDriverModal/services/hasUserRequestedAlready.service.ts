import { privateAxios } from "../../core";

const url = `${process.env?.REACT_APP_API_URL}/driver/requested`;

export const getHasUserRequestedAlready = async () => {
  try {
    const response = await privateAxios(url, {});
    return await response.data;
  } catch (error) {
    return [];
  }
};
