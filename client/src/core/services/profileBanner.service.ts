export async function getProfilePicSrc(id: string) {
  const url = (id: string) =>
    `${process.env?.REACT_APP_API_URL}/banner/photo/${id}`;
  try {
    const response = await fetch(url(id));
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getUserData(id: string) {
  const url = (id: string) =>
    `${process.env?.REACT_APP_API_URL}/banner/user/${id}`;
  try {
    const response = await fetch(url(id));
    return await response.json();
  } catch (error) {
    return [];
  }
}
