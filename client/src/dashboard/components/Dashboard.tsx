/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Status, usePageTitle } from "../../core";
import { Account, Admin, Driver, Inbox, Misc, Trips } from "./sections";

export const Dashboard: FC = () => {
  const { t } = useTranslation("Dashboard");

  const user = {
    status: "admin" as Status,
  }; // TODO Please implement real user

  usePageTitle(t("title"));

  return (
    <Container
      css={css`
      section:not(:last-child) {
        padding-bottom: 1rem;
        margin-bottom: 1rem;
          border-bottom: 2px solid #E8E8E8;

      `}
    >
      <Account status={user.status} />
      <Trips status={user.status} />
      <Inbox status={user.status} />
      <Driver status={user.status} />
      <Admin status={user.status} />
      <Misc />
    </Container>
  );
};
