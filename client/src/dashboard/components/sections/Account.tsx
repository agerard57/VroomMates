/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import {
  getStatusIcon,
  LoggedUserDataProps,
  logout,
  ProfilePic,
} from "../../../core";
import { MenuListItem } from "../../../core";
import { MenuListTitle } from "../../../core";

export const Account: FC<LoggedUserDataProps> = ({ loggedUserData }) => {
  const { t } = useTranslation("Dashboard");
  const accountIcon = getStatusIcon(loggedUserData?.role);

  return loggedUserData ? (
    <section>
      <ProfilePic
        src={loggedUserData.photoUrl}
        rating={loggedUserData.avgRating}
        displayRating
        displayStars
        isVerified={loggedUserData.confirmedEmail}
      />
      <h2
        css={css`
          font-weight: 500;
          text-align: center;
          font-size: 1.7rem;
        `}
      >
        {t("accountSection.greetingMessage", {
          firstName: loggedUserData.name.first_name,
        })}{" "}
        {accountIcon ? <img src={accountIcon} alt="accountIcon" /> : null}
      </h2>
      <div>
        <MenuListItem
          title={t("accountSection.yourAccount")}
          link="/profile/view"
        />
        <MenuListItem
          title={t("accountSection.signOff")}
          onClick={logout}
          color="#FF5656"
        />
      </div>
    </section>
  ) : (
    <section>
      <MenuListTitle title={t("accountSection.title")} />
      <MenuListItem title={t("accountSection.signIn")} link="/profile/login" />
      <MenuListItem
        title={t("accountSection.signUp")}
        link="/profile/register"
      />
    </section>
  );
};
