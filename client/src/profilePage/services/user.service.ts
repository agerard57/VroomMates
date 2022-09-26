import { privateAxios } from "../../core";

export const getUser = async (id: string) => {
  const url = (id: string) => `${process.env?.REACT_APP_API_URL}/user/${id}`;
  try {
    const response = await privateAxios.get(url(id));

    return await response.data;
  } catch (error) {
    return [];
  }
};

export const manageUserBan = async (id: string) => {
  const url = (id: string) =>
    `${process.env?.REACT_APP_API_URL}/user/ban/${id}`;
  try {
    const response = await privateAxios.put(url(id));

    return await response.data;
  } catch (error) {
    return [];
  }
};
