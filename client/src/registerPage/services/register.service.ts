import { publicAxios } from "../../core";
import { PostRegisterProps } from "../types";

const url = `${process.env?.REACT_APP_API_URL}/profile/register`;

export const postRegister = async (formData: PostRegisterProps) => {
  try {
    const response = await publicAxios.post(url, JSON.stringify(formData));

    const data = await response.data;
    data.status = response.status;
    return data;
  } catch (error) {
    return [];
  }
};
