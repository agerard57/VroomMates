import { privateAxios } from "../../core";

const url = (id: string) =>
  `${process.env?.REACT_APP_API_URL}/reviews/received/${id}`;

export const getReceivedReviewsByUserId = async (id: string) => {
  try {
    const response = await privateAxios.get(url(id));

    return await response.data;
  } catch (error) {
    return [];
  }
};
