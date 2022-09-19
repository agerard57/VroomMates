import { cookiesManager } from "../../core";

const url = `${process.env?.REACT_APP_API_URL}/driver/license`;

export const postDriversLicense = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "x-access-token": cookiesManager.getCookie("authToken"),
      },
      body: formData,
    });
    const data = await response.json();
    data.status = response.status;

    return data;
  } catch (error) {
    return [];
  }
};
