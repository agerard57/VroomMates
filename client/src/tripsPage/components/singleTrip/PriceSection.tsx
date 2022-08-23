/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col } from "react-bootstrap";

import { normalizePrice } from "../../../core";
import { useLanguage } from "../../../language";

type Props = {
  price: number;
};

export const PriceSection: FC<Props> = ({ price }) => {
  const { language } = useLanguage();
  return (
    <Col
      css={css`
        display: flex;
        justify-content: flex-end;
        color: #367fef;
        font-size: 1rem;
      `}
    >
      {normalizePrice(price, language)}
    </Col>
  );
};
