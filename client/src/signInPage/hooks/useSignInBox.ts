import { FormEvent, FormEventHandler } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { cookiesManager, usePageTitle } from "../../core";
import { useModal } from "../../modal";
import { RegisterCompleteModalBuilder } from "../../registerCompleteModal";
import { postLogin } from "../services";

type SignInBoxManager = {
  handleSubmit: FormEventHandler<HTMLFormElement>;
};

export const useSignInBox = (): SignInBoxManager => {
  const { t } = useTranslation("SignInPage");

  const { openModal } = useModal();
  const screens = RegisterCompleteModalBuilder();

  usePageTitle(t("title"));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);
    const email = data.get("email");
    const password = data.get("current-password");
    const rememberMe = data.get("rememberMe") === "on" ? true : false;
    if (email && password)
      postLogin(email, password, rememberMe).then((response) => {
        if (response.status === 200) {
          cookiesManager.setCookie("authToken", response.authToken, rememberMe);
          toast.success(t(response.message));
          if (response.isFirstLogin) openModal(screens, "registerComplete");
          else window.location.href = "/";
        } else toast.error(t(response.message));
      });
  };

  return { handleSubmit };
};
