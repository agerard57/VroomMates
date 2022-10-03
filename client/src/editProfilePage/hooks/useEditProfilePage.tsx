import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { usePageTitle } from "../../core";
import { UserInputs, UserInputsInitializer } from "../interfaces";
import { getUserInfos } from "../services";
import { UseEditProfilePageManager } from "../types";

export const useEditProfilePage: UseEditProfilePageManager = () => {
  const { t } = useTranslation("EditProfilePage");

  const [userInputs, setUserInputs] = useState<UserInputs>(
    UserInputsInitializer
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
