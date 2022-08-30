const url = (id: string) =>
  `${process.env?.REACT_APP_API_URL}/reviews/received/${id}`;

export async function getReceivedReviewsByUserId(id: string) {
  try {
    const response = await fetch(url(id));
    return await response.json();
  } catch (error) {
    return [];
  }
}
