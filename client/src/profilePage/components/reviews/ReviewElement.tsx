/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { normalizeDate, Stars } from "../../../core";
import { useLanguage } from "../../../language";
import { Review } from "../../interfaces";

type Props = {
  review: Review;
};

export const ReviewElement: FC<Props> = ({ review }) => {
  const { t } = useTranslation("ProfilePage");
  const { language } = useLanguage();

  return (
    <>
      <div>
        <div
          css={css`
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
          `}
        >
          <Col
            css={css`
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: space-evenly;
            `}
          >
            <Stars rating={review.rating} />
            <span>
              {t("reviews.by")} {review.author.name.first_name}{" "}
              {review.author.name.last_name}
            </span>
          </Col>
          <Col
            css={css`
              align-self: center;
            `}
          >
            <span>{normalizeDate(review.date, language, "numericDate")}</span>
          </Col>
        </div>
        <div
          css={css`
            padding: 0.5rem 1rem;
            overflow-wrap: break-word;
            text-align: justify;
          `}
        >
          <span>"{review.message}"</span>
        </div>
      </div>
      <hr
        css={css`
          margin-top: 0;
          :last-of-type {
            display: none;
          }
        `}
      />
    </>
  );
};
