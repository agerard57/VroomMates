const url = `${process.env?.REACT_APP_API_URL}/profile/refresh`;

async function refreshAuthToken(authToken: string) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authToken: authToken,
      }),
    });
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (error) {
    return [];
  }
}

export const tokenService = {
  refreshAuthToken,
};
