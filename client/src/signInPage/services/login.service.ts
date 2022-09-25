import { publicAxios } from "../../core";

const url = `${process.env?.REACT_APP_API_URL}/profile/login`;

export const postLogin = async (
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null,
  rememberMe: boolean
) => {
  try {
    const response = await publicAxios.post(url, {
      email,
      password,
      rememberMe,
    });
    const data = await response.data;
    data.status = response.status;
    return data;
  } catch (error) {
    return [];
  }
};
