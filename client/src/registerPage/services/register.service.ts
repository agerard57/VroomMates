import { PostRegisterProps } from "../types";

const url = `${process.env?.REACT_APP_API_URL}/profile/register`;

export const postRegister = async (formData: PostRegisterProps) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (error) {
    return [];
  }
};
