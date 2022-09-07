/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Trip } from "../../interfaces";

type Props = {
  userId: string | null;
  driver: Trip["driver"];
};

export const DriverSection: FC<Props> = ({ userId, driver }) => {
  const { t } = useTranslation("TripsPage");

  const driverName =
    driver._id === userId
      ? t("trip.organizedByYourself")
      : t("trip.organizedByDriver", { driver: driver.name.first_name });

  return (
    <Col
      css={css`
        display: flex;
        justify-content: flex-start;
        color: #787878;
        font-weight: 500;
        font-size: 0.8rem;
        white-space: nowrap;
      `}
    >
      {driverName}
    </Col>
  );
};
