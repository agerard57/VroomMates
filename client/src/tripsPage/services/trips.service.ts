import { cookiesManager } from "../../core";

const url = (id: string) => `${process.env?.REACT_APP_API_URL}/trips/${id}`;

export async function getUserTrips(id: string) {
  try {
    const response = await fetch(url(id), {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "x-access-token": cookiesManager.getCookie("authToken"),
      }),
    });
    return await response.json();
  } catch (error) {
    return [];
  }
}
