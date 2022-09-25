import axios from "axios";

export const publicAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // Configures error handling for axios
  validateStatus: (status) => status >= 200 && status < 500,
});
