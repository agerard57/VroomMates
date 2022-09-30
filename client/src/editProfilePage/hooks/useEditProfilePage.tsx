import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { usePageTitle } from "../../core";
import { getUserInfos } from "../services";

export const useEditProfilePage = () => {
  const { t } = useTranslation("EditProfilePage");
  interface UserInputs {
    _id: string;
    name: { first_name: string; last_name: string };
    email: { email_address: string };
    password: string;
    address: {
      house_number: number;
      street_name: string;
      city: string;
      state: string;
      zip: number;
    };
    photo_url: string;
    about: {
      bio: string;
      chatty: string;
      music: string;
      animals_tolerated: string;
    };
  }

  const [userInputs, setUserInputs] = useState<UserInputs | undefined>(
    undefined
  );
  const navigate = useNavigate();

  usePageTitle(t("title"));

  useEffect(() => {
    getUserInfos().then((response) => {
      setUserInputs(response);
    });
  }, []);
  return { userInputs, setUserInputs };
};
