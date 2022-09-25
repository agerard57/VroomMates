import { useEffect } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { cookiesManager } from "../../core";
import { deleteAccount } from "../services";

export const useSecondGoodbye = () => {
  const { t } = useTranslation("CloseAccountModal");

  useEffect(() => {
    deleteAccount().then((status) => {
      if (status === 204) {
        cookiesManager.deleteCookie("authToken");
        toast.success(t("message.success"));
      } else toast.error(t("message.error"));
    });
  }, [t]);
};
