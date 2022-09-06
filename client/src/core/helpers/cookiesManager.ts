import Cookies from "universal-cookie";

const cookies = new Cookies();

const setCookie = (key: string, value: string, rememberMe: boolean) => {
  // 1 month if rememberMe is true, session if false
  const maxAge = rememberMe ? 2628000 : undefined;
  cookies.set(key, value, {
    path: "/",
    maxAge: maxAge,
  });
};

const getCookie = (key: string) => {
  return cookies.get(key);
};

export const cookiesManager = {
  setCookie,
  getCookie,
};
