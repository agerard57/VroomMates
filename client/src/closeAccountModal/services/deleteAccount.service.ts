import { privateAxios } from "../../core";

const url = `${process.env?.REACT_APP_API_URL}/profile/close`;

export const deleteAccount = async () => {
  try {
    const response = await privateAxios.delete(url);
    const status = await response.status;

    return status;
  } catch (error) {
    return [];
  }
};
