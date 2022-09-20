import { useEffect } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { cookiesManager } from "../../core";
import { deleteAccount } from "../services";

export const useSecondGoodbye = () => {
  const { t } = useTranslation("CloseAccountModal");

  useEffect(() => {
    deleteAccount().then((response) => {
      if (response.status === 204) {
        cookiesManager.deleteCookie("authToken");
        toast.success(t(response.message));
      } else {
        toast.error(t(response.message));
      }
    });
  }, [t]);
};
