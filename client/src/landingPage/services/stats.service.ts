const url = `${process.env.REACT_APP_API_URL}/home/stats`;

export async function getStats() {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return [];
  }
}
