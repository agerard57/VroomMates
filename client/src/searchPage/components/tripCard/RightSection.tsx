/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { ProfilePic, normalizePrice } from "../../../core";
import { useLanguage } from "../../../language";

type DriverProps = {
  imgSrc: string;
  firstName: string;
  rating: number;
  isVerified: boolean;
};

type Props = {
  driver: DriverProps;
  price: { $numberDecimal: string };
  isFull: boolean;
};

export const RightSection: FC<Props> = ({ driver, price, isFull }) => {
  const { t } = useTranslation("SearchPage");

  const { language } = useLanguage();
  return (
    <Col
      css={css`
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align-last: center;

        // Overwrites profile pic size
        img:first-of-type {
          width: 20vw;
          height: 20vw;
      `}
    >
      <div>
        <ProfilePic
          src={driver.imgSrc}
          rating={driver.rating}
          displayStars
          isVerified={driver.isVerified}
        />
        <h3
          css={css`
            flex-grow: 1;
          `}
        >
          {driver.firstName}
        </h3>
      </div>
      <h2
        css={css`
          color: ${!isFull ? "#ff8956" : "#000000"};
          justify-self: flex-end;
          font-weight: 600;
          font-size: 1.7rem;
        `}
      >
        {!isFull
          ? normalizePrice(price.$numberDecimal, language)
          : t("search.full").toUpperCase()}
      </h2>
    </Col>
  );
};
