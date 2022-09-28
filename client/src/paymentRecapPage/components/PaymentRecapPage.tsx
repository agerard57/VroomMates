/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { LoggedUserDataProps } from "../../core";
import { usePaymentRecapPage } from "../hooks";

type Props = {
  loggedUserData: LoggedUserDataProps["loggedUserData"];
};

export const PaymentRecapPage: FC<Props> = ({ loggedUserData }) => {
  const { t } = useTranslation("PaymentRecapPage");

  usePaymentRecapPage(loggedUserData);

  return (
    <Container
      css={css`
        padding: 5vw;
      `}
    >
      <h1>PaymentRecapPage page</h1>
      <p>{t("title")}</p>
    </Container>
  );
};
