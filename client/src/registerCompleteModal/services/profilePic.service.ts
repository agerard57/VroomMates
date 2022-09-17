import { cookiesManager } from "../../core";

const url = `${process.env?.REACT_APP_API_URL}/photo/upload`;

export const postProfilePic = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    console.log("file", file);
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
