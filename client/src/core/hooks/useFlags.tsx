import i18next, { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { useToasts } from "react-toast-notifications";

type ToastManager = {
  onClick(lng: string): void;
};
export const useFlags = (): ToastManager => {
  const { t } = useTranslation("core");
  const { addToast } = useToasts();
  const onClick = (lng: string) => {
    const isSameLang = i18next.language === lng;
    const toasterLangManager = isSameLang
      ? addToast(t("deniedMessage"), {
          appearance: "info",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        })
      : (changeLanguage(lng),
        addToast(t("confirmationMessage"), {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        }));
    return toasterLangManager;
  };
  return { onClick };
};
