const url = (id: string) => `${process.env?.REACT_APP_API_URL}/trip/${id}`;

export const getTrip = async (id: string) => {
  try {
    const response = await fetch(url(id));
    return await response.json();
  } catch (error) {
    return [];
  }
};
