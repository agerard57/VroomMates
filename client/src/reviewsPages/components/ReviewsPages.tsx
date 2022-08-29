/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { useReviewsPages } from "../hooks";

export const ReviewsPages: FC = () => {
  const { t } = useTranslation("ReviewsPages");

  useReviewsPages();

  return (
    <Container
      css={css`
        padding: 5vw;
      `}
    >
      <h1>ReviewsPages page</h1>
      <p>{t("title")}</p>
    </Container>
  );
};
