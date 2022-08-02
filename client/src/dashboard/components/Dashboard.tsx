/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";

import { Account, Admin, Driver, Inbox, Misc, Trips } from "./sections";

export const Dashboard: FC = () => {
  const user = {
    status: "admin",
  };

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
