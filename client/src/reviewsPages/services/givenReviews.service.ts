const url = (id: string) =>
  `${process.env?.REACT_APP_API_URL}/reviews/given/${id}`;

export async function getGivenReviewsByUserId(id: string) {
  try {
    const response = await fetch(url(id));
    return await response.json();
  } catch (error) {
    return [];
  }
}
