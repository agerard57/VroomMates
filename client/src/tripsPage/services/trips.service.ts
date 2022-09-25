import axios from "axios";

const url = (id: string) => `${process.env?.REACT_APP_API_URL}/trips/${id}`;

export const getUserTrips = async (id: string) => {
  try {
    const response = await axios.get(url(id), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.data;
  } catch (error) {
    return [];
  }
};
