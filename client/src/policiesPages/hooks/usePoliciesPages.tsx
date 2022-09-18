import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import { usePageTitle } from "../../core";
import { Pages } from "../types";

type PoliciesPagesManager = {
  value: Pages;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const usePoliciesPages = (): PoliciesPagesManager => {
  const { t } = useTranslation("PoliciesPages");

  const queryPage = window.location.hash.substring(1);
  const getInitialState = () => {
    const value =
      queryPage === "termsAndConditions" ||
      queryPage === "privacyPolicy" ||
      queryPage === "cookies"
        ? queryPage
        : "termsAndConditions";
    return value;
  };
  const [value, setValue] = useState<Pages>(getInitialState);

  window.location.hash = value;
  window.scroll(0, 0);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value as Pages);
  };

  usePageTitle(t(`${value}.title`));

  return { value, handleChange };
};
