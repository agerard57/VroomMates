/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { usePageTitle, AuthToken } from "../../core";
import { Account, Admin, Driver, Inbox, Misc, Trips } from "./sections";

type Props = { loggedUserData: AuthToken["data"] | null };

export const Dashboard: FC<Props> = ({ loggedUserData }) => {
  const { t } = useTranslation("Dashboard");
  
  const status = loggedUserData?.role ? loggedUserData.role : undefined;

  usePageTitle(t("title"));

  return (
    <Container
      css={css`
        section:not(:last-child) {
          padding-bottom: 1rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid #e8e8e8;
        }
      `}
    >
      <Account loggedUserData={loggedUserData} />
      <Trips status={status} />
      <Inbox status={status} />
      <Driver status={status} />
      <Admin status={status} />
      <Misc />
    </Container>
  );
};
