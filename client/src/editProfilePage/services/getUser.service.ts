import { privateAxios } from "../../core";

const url = `${process.env?.REACT_APP_API_URL}/profile/edit`;

export const getUserInfos = async () => {
  try {
    const response = await privateAxios.get(url);

    return await response.data;
  } catch (error) {
    return [];
  }
};
