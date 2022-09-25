import { privateAxios } from "../../core";

const url = (id: string) =>
  `${process.env?.REACT_APP_API_URL}/reviews/given/${id}`;

//TODO REMOVE: As there is an id in the cookie, this is not needed

export const getGivenReviewsByUserId = async (id: string) => {
  try {
    const response = await privateAxios.get(url(id));

    return await response.data;
  } catch (error) {
    return [];
  }
};
