/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { useAdminUserListPage } from "../hooks";
import { UserCard } from "./UserCard";

export const AdminUserListPage: FC = () => {
  const { t } = useTranslation("AdminUserListPage");

  const { handleSearch, filteredUsers } = useAdminUserListPage();

  return (
    <Container
      css={css`
        padding: 0;
      `}
    >
      <h1
        css={css`
          font-weight: 700;
        `}
      >
        {t("header")}
      </h1>
      <input
        css={css`
          background: #eaecf1;
          color: #889bc;
          font-weight: 600;
          border-radius: 8px;
          border: none;
          padding: 10px;
          margin: 0.5rem 1rem 1rem 1rem;
          width: 80%;
        `}
        placeholder={t("search")}
        name="search"
        onChange={handleSearch}
      />
      {filteredUsers.map((user, index) => (
        <Row
          key={index}
          css={css`
            border-radius: 4px;
            border-top: ${index === 0 ? "#dfdfdf 1px solid" : "none"};
            border-bottom: #dfdfdf 1px solid;
            padding: 0.5rem;
          `}
        >
          <UserCard user={user} />
        </Row>
      ))}

      <p
        css={css`
          font-weight: 600;
          margin: 1rem;
        `}
      >
        {t("endOfList")}
      </p>
    </Container>
  );
};
