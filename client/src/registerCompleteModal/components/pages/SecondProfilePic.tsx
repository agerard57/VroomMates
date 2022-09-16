/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import PlusButtonSrc from "../../assets/icons/plusButton.svg";

export const SecondProfilePic: FC = () => {
  const { t } = useTranslation("RegisterCompleteModal");

  return (
    <Container
      css={css`
        height: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <Row>
        <img
          src="https://cdn.discordapp.com/attachments/999245209974079538/1020143119704010812/unknown.png"
          alt="profile pic"
          css={css`
            width: 50vw;
            margin-left: auto;
            margin-right: auto;
            display: block;
            padding-bottom: 2rem;
          `}
        />
        <h1
          css={css`
            font-weight: 700;
            color: #3d3d3d;
          `}
        >
          {t("page.1.title")}
        </h1>
      </Row>
      <Row
        css={css`
          display: flex;
        `}
      >
        <p
          css={css`
            color: #636363;
            padding-top: 1rem;
            margin-bottom: 0;
            white-space: pre-wrap;
            line-height: 0.8;
          `}
        >
          {t("page.1.body")}
        </p>
        <img
          src={PlusButtonSrc}
          alt="plus button"
          css={css`
            padding: 2rem;

            margin-left: auto;
            margin-right: auto;
            display: block;
            height: 10rem;
            width: auto;
          `}
        />
      </Row>
    </Container>
  );
};
