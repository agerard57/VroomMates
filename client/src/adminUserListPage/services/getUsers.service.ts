import { privateAxios } from "../../core";

const url = `${process.env?.REACT_APP_API_URL}/admin/users`;

export const getUsers = async () => {
  try {
    const response = await privateAxios.get(url);

    return await response.data;
  } catch (error) {
    return [];
  }
};
