const url = `${process.env?.REACT_APP_API_URL}/home`;

export const getStats = async () => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return [];
  }
};
