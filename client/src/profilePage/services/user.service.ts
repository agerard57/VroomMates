const url = (id: string) => `${process.env?.REACT_APP_API_URL}/user/${id}`;

export async function getUser(id: string) {
  try {
    const response = await fetch(url(id));
    return await response.json();
  } catch (error) {
    return [];
  }
}
