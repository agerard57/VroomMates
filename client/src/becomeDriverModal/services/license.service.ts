import { privateAxios } from "../../core";

const url = `${process.env?.REACT_APP_API_URL}/driver/license`;

export const postDriversLicense = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const response = await privateAxios.post(url, formData);
    const data = await response.data;
    data.status = response.status;

    return data;
  } catch (error) {
    return [];
  }
};
