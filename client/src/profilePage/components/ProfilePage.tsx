/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, useState } from "react";
import { Container } from "react-bootstrap";

import { PageBanner, PageHeader } from "../../core/components/profileBanner";
import { useProfilePage } from "../hooks";
import { MainButton } from "./MainButton";
import { AccountManagementMenu } from "./accountManagementMenu";
import { AboutCards } from "./cards";
import { AboutList } from "./list";
import { ReviewsCard } from "./reviews";

export const ProfilePage: FC = () => {
  const { user, pageType } = useProfilePage();

  const [accountManagementMenu, setAccountManagementMenu] =
    useState<boolean>(false);

  /* TODO Make the header and the navbar unmovable */
  return (
    <>
      <PageBanner avatarSrc={user.photo_url} />
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
        <PageHeader
          user={{
            firstName: user.name.first_name,
            lastName: user.name.last_name,
            avatarSrc: user.photo_url,
            dateOfBirth: user.birth_date,
            status: user.status,
          }}
          stats={{
            avgRating: user.avg_rating,
            nbTripsCreated: user.nb_trips_created,
            nbTripsParticipated: user.nb_trips_participated,
          }}
        />
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
            <ReviewsCard userReviews={user.ratings} />
          </div>
        ) : (
          <AccountManagementMenu userStatus={user.status} />
        )}
      </Container>
    </>
  );
};
