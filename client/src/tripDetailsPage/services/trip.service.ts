import axios from "axios";

const url = (id: string) => `${process.env?.REACT_APP_API_URL}/trip/${id}`;

export const getTrip = async (id: string) => {
  try {
    const response = await axios.get(url(id));
    return await response.data;
  } catch (error) {
    return [];
  }
};
