import { cookiesManager, privateAxios } from "../../core";

const url = `${process.env?.REACT_APP_API_URL}/photo/upload`;

export const postProfilePic = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const response = await privateAxios.post(url, formData, {
      headers: { "x-access-token": cookiesManager.getCookie("authToken") },
    });
    const data = await response.data;
    data.status = response.status;

    return data;
  } catch (error) {
    return [];
  }
};
