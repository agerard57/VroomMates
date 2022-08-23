/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";

import { UserType } from "../../../core";
import { AccountSection } from "./AccountSection";
import { ReviewsSection } from "./ReviewsSection";

type Props = {
  userStatus: UserType["Status"];
};

export const AccountManagementMenu: FC<Props> = ({ userStatus }) => (
  <Container
    css={css`
      section:not(:last-child) {
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        border-bottom: 2px solid #e8e8e8;
      }

      a {
        padding: 3px 0;
      }
    `}
  >
    <ReviewsSection />
    <AccountSection userStatus={userStatus} />
  </Container>
);
