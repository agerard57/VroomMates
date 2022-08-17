const url = (id: string) => `${process.env?.REACT_APP_API_URL}/trip/${id}`;

export async function getTrip(id: string) {
  try {
    const response = await fetch(url(id));
    return await response.json();
  } catch (error) {
    return [];
  }
}
