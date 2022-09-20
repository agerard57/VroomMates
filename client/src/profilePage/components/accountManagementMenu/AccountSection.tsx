import { FC } from "react";
import { useTranslation } from "react-i18next";

import { CloseAccountModalBuilder } from "../../../closeAccountModal";
import { logout, MenuListItem, MenuListTitle, UserTypes } from "../../../core";
import { useModal } from "../../../modal";

type Props = {
  userStatus: UserTypes["Status"];
};

export const AccountSection: FC<Props> = ({ userStatus }) => {
  const { t } = useTranslation("ProfilePage");
  const { openModal } = useModal();
  const screens = CloseAccountModalBuilder();
  return (
    <section>
      <MenuListTitle title={t("accountManagementMenu.account.title")} />
      <MenuListItem
        title={t("accountManagementMenu.account.balance")}
        link="/account/balance"
      />
      <MenuListItem
        title={t("accountManagementMenu.account.managePayment")}
        link="/account/payment-methods"
      />
      {userStatus === "passenger" ? (
        <MenuListItem
          title={t("accountManagementMenu.account.driver")}
          link="/driver/join"
        />
      ) : null}
      {userStatus === "driver" || userStatus === "admin" ? (
        <MenuListItem
          title={t("accountManagementMenu.account.car")}
          link="/profile/edit-car"
        />
      ) : null}
      <MenuListItem
        title={t("accountManagementMenu.account.profile")}
        link="/profile/edit-profile"
        isBold
      />
      <MenuListItem
        title={t("accountManagementMenu.account.logout")}
        onClick={logout}
        color="#ff5656"
      />
      <MenuListItem
        title={t("accountManagementMenu.account.close")}
        onClick={() => openModal(screens)}
        color="#ff5656"
        isBold
      />
    </section>
  );
};
