/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { CardArrow, normalizeDate, ProfilePic } from "../../core";
import { useLanguage } from "../../language";
import { User } from "../interfaces";

type Props = {
  user: User;
};

export const UserCard: FC<Props> = ({ user }) => {
  const { t } = useTranslation("AdminUserListPage");

  const { language } = useLanguage();

  return (
    <>
      <Col
        css={css`
          display: flow-root;
          align-self: center;
        `}
      >
        <ProfilePic
          outsidePictureStyling={css`
            width: 3rem;
            text-align: center;
          `}
          src={user.photoUrl}
          rating={user.avgRating}
          displayRating
          isVerified={user.confirmed}
        />
      </Col>
      <Col
        xs={8}
        css={css`
          text-align: left;
        `}
      >
        <Row>
          <span
            css={css`
              font-weight: 600;
            `}
          >{`${user.name.firstName} ${user.name.lastName}`}</span>
        </Row>
        <Row>
          <span
            css={css`
              color: ${user.status === "banned" ? "red" : "black"};
            `}
          >
            {t(`status.${user.status}`).toUpperCase()}
          </span>
        </Row>
        <Row>
          <span
            css={css`
              margin-top: 1rem;
              font-size: 0.8rem;
              color: #3d3d3d;
            `}
          >{`${t("registeredSince")} ${normalizeDate(
            user.registeredSince,
            language,
            "longDate"
          )}, ${normalizeDate(user.registeredSince, language, "time")}`}</span>
        </Row>
      </Col>
      <CardArrow />
    </>
  );
};
