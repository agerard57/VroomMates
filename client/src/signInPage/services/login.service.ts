const url = `${process.env?.REACT_APP_API_URL}/profile/login`;

export const postLogin = async (
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null,
  rememberMe: boolean
) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, rememberMe }),
    });
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (error) {
    return [];
  }
};
