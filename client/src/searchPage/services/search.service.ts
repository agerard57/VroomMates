import { QueriesProps } from "../types";

export const getSearchResults = async ({
  type,
  departureLocation,
  arrivalLocation,
  date,
}: QueriesProps) => {
  const url = ({
    type,
    departureLocation,
    arrivalLocation,
    date,
  }: QueriesProps) =>
    `${process.env?.REACT_APP_API_URL}/search?type=${type}&departureLocation=${departureLocation}&arrivalLocation=${arrivalLocation}&date=${date}`;
  try {
    const response = await fetch(
      url({ type, departureLocation, arrivalLocation, date })
    );
    return await response.json();
  } catch (error) {
    return [];
  }
};
