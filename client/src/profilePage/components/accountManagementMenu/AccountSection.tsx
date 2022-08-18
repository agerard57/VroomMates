import { FC } from "react";
import { useTranslation } from "react-i18next";

import { MenuListItem, MenuListTitle, Status } from "../../../core";

type Props = {
  userStatus: Status;
};

export const AccountSection: FC<Props> = ({ userStatus }) => {
  const { t } = useTranslation("ProfilePage");

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
        link="/" // TODO Implement logout feature
        color="#ff5656"
      />
      <MenuListItem
        title={t("accountManagementMenu.account.close")}
        link="/" // TODO Implement close account feature
        color="#ff5656"
        isBold
      />
    </section>
  );
};
