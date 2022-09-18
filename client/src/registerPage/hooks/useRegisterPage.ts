import { FormEventHandler } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { usePageTitle } from "../../core";
import { postRegister } from "../services";
import { PostRegisterProps } from "../types";

type RegisterPageManager = {
  handleSubmit: FormEventHandler<HTMLFormElement>;
};

export const useRegisterPage = (): RegisterPageManager => {
  const { t } = useTranslation("RegisterPage");

  usePageTitle(t("title"));

  const formBeautifier = (formData: FormData) => {
    const data = Object.fromEntries(formData);

    const beautifiedData: PostRegisterProps = {
      last_name: data["lastName"],
      first_name: data["firstName"],
      email: data["email"],
      password1: data["password1"],
      password2: data["password2"],
      house_number: data["houseNumber"],
      street_name: data["streetName"],
      city: data["city"],
      zip: data["zip"],
      state: data["state"],
      country: data["country"],
      birth_date: data["birthDate"],
      terms_and_conditions: data["termsAndConditions"],
    };

    return beautifiedData;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);

    postRegister(formBeautifier(data)).then((response) => {
      if (response.status === 200) {
        toast.success(t(response.message));
        setTimeout(() => {
          window.location.href = "/profile/login";
        }, 2000);
      } else {
        toast.error(t(response.message));
      }
    });
  };

  return {
    handleSubmit,
  };
};
