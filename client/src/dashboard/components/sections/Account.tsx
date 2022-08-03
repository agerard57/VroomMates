/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { ProfilePic } from "../../../core";
import AdminIcon from "../../assets/icons/adminIcon.svg";
import DriverIcon from "../../assets/icons/driverIcon.svg";
import { Item } from "../Item";
import { Title } from "../Title";

type Props = {
  status?: string;
};

export const Account: FC<Props> = ({ status }) => {
  const { t } = useTranslation("Dashboard");
  const accountIcon = () => {
    if (status === "driver") return DriverIcon;
    else if (status === "admin") return AdminIcon;
    else return undefined;
  };
  return status ? (
    <section>
      <ProfilePic
        src="https://randomuser.me/api/portraits/men/53.jpg"
        rating={3}
        displayRating
        displayStars
        isVerified
      />
      <h2
        css={css`
          font-weight: 500;
          text-align: center;
          font-size: 1.7rem;
        `}
      >
        {t("accountSection.greetingMessage", { firstName: "Alexandre" })}{" "}
        {accountIcon() ? <img src={accountIcon()} alt="accountIcon" /> : null}
      </h2>
      <div>
        <Item title={t("accountSection.yourAccount")} link="/profile/view" />
        <Item
          title={t("accountSection.signOff")}
          link="/home" //TODO add param to logout
          color="#FF5656"
        />
      </div>
    </section>
  ) : (
    <section>
      <Title title={t("accountSection.title")} />
      <Item title={t("accountSection.signIn")} link="/login" />
      <Item title={t("accountSection.signUp")} link="/register" />
    </section>
  );
};
