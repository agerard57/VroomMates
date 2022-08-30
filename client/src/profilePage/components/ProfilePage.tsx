/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { ProfileBanner, ProfileHeader, ReviewsCard } from "../../core";
import { useProfilePage } from "../hooks";
import { MainButton } from "./MainButton";
import { AccountManagementMenu } from "./accountManagementMenu";
import { AboutCards } from "./cards";
import { AboutList } from "./list";

export const ProfilePage: FC = () => {
  const { t } = useTranslation("ProfilePage");

  const { user, pageType } = useProfilePage();

  const [accountManagementMenu, setAccountManagementMenu] =
    useState<boolean>(false);

  /* TODO Make the header and the navbar unmovable */
  return (
    <>
      <ProfileBanner id={user._id} />
      <Container
        css={css`
          position: absolute;
          top: 11.5vh;
          h2 {
            color: #3d3d3d;
            text-align: left;
          }
        `}
      >
        <ProfileHeader id={user._id} />
        <MainButton
          pageType={pageType}
          onClick={{
            ban: () => {},
            manage: () => setAccountManagementMenu(!accountManagementMenu),
          }}
          accountManagementMenu={accountManagementMenu}
        />
        {!accountManagementMenu ? (
          <div
            css={css`
              & > * {
                margin: 5% 0;
              }
            `}
          >
            <AboutCards
              bio={user.about?.bio}
              car={user.car}
              hobbies={user.about?.hobbies}
              status={user.status}
            />
            <AboutList
              talk={user.about?.chatty}
              music={user.about?.music}
              pet={user.about?.animals_tolerated}
            />
            <ReviewsCard
              userReviews={user.ratings}
              title={t("reviews.title", { count: user.ratings.length })}
            />
          </div>
        ) : (
          <AccountManagementMenu userStatus={user.status} />
        )}
      </Container>
    </>
  );
};
