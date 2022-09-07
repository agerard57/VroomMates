async function refreshAuthToken(authToken: string) {
  const url = `${process.env?.REACT_APP_API_URL}/profile/refresh`;

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

async function deleteRefreshToken(authToken: string) {
  const url = `${process.env?.REACT_APP_API_URL}/profile/signout`;

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
  deleteRefreshToken,
};
