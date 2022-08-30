/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { ProfilePic, Stars } from "../../../core";
import { useProfileHeader } from "../../hooks";

type Props = {
  id: string;
};

export const ProfileHeader: FC<Props> = ({ id }) => {
  const { t } = useTranslation("ProfilePage");

  const { user, stats, age, accountIcon, rating } = useProfileHeader(id);

  return (
    <>
      <Row
        css={css`
          align-items: center;
          text-align: -webkit-center;
        `}
      >
        <Col>
          <div
            css={css`
              width: 70px;
              height: 70px;
              border-radius: 50px;
              background: linear-gradient(180deg, #4563ff 0%, #fd664d 100%);
              border: 3px solid #ffffff;
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <span>
              <b>{rating}</b> / 5
            </span>
          </div>
        </Col>
        <Col>
          <ProfilePic
            src={user.profilePicSrc}
            outsidePictureStyling={`
                width: 7rem;
                height: 7rem;
                border:white 5px solid;
                align-items: center;
                display: block;
                `}
          />
        </Col>
        <Col>
          <div
            css={css`
              width: 75px;
              height: 75px;
              padding: 3px;
              border-radius: 50px;
              background: linear-gradient(180deg, #4563ff 0%, #fd664d 100%);
              border: 3px solid #ffffff;
              display: flex;
              color: white;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              span {
                font-size: 0.8rem;
              }
            `}
          >
            {user.status === "driver" ? (
              <>
                <b>{stats.nbTripsCreated}</b>
                <span>
                  {t("header.tripsCreated", { count: stats.nbTripsCreated })}
                </span>
              </>
            ) : (
              <>
                <b>{stats.nbTripsParticipated}</b>
                <span>
                  {t("header.tripsDone", { count: stats.nbTripsCreated })}
                </span>
              </>
            )}
          </div>
        </Col>
      </Row>
      <Row
        css={css`
          margin-top: -10px;
        `}
      >
        <Stars rating={rating} isCurved />
      </Row>
      <Row>
        <h1
          css={css`
            margin: 0;
          `}
        >
          {`${user.firstName} ${user.lastName}`}{" "}
          {accountIcon ? <img src={accountIcon} alt="accountIcon" /> : null}
        </h1>
        <span
          css={css`
            color: #595959;
          `}
        >
          {t("header.age", { age: age })}
        </span>
      </Row>
    </>
  );
};
