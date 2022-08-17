/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import Nav from "react-bootstrap/Nav";
import { useTranslation } from "react-i18next";

import { DashboardIcon } from "./DashboardIcon";
import { HomeIcon } from "./HomeIcon";
import { InboxIcon } from "./InboxIcon";
import { SearchIcon } from "./SearchIcon";

export const Navbar: FC = () => {
  const { t } = useTranslation("Core");
  return (
    <div
      css={css`
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.4);
        position: fixed;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: baseline;
        flex-wrap: nowrap;
        width: -webkit-fill-available;
        background-color: #ffffff;
        bottom: 0;
        font-family: "Baloo2";
        font-weight: 650;
        padding: 5px 0;
        a {
          text-decoration: none;
          padding-top: 2%;
          padding-bottom: 2%;
        }
        .selectedBlue {
          color: #445588;
        }
        .notSelectedBlue {
          color: #8e99b7;
        }
        .selectedOrange {
          color: #ed8133;
        }
        .notSelectedOrange {
          color: #f4b384;
        }

        .col {
          text-align: center;
        }
        span {
          padding: 0;
        }
        svg {
          display: block;
          margin: auto;
        }
      `} /* TODO: REMOVE THE CSS RULES AS WE WANT TO TO IT ANOTHER WAY */
    >
      <Nav.Link href="/home">
        <HomeIcon />
        <span className="selectedBlue">{t("navbar.home")}</span>
      </Nav.Link>

      <Nav.Link href="/search">
        <SearchIcon />
        <span className="notSelectedBlue">{t("navbar.search")}</span>
      </Nav.Link>

      <Nav.Link href="/home">
        <InboxIcon />
        <span className="selectedOrange">{t("navbar.inbox")}</span>
      </Nav.Link>

      <Nav.Link href="/dashboard">
        <DashboardIcon />
        <span className="notSelectedOrange">{t("navbar.dashboard")}</span>
      </Nav.Link>
    </div>
  );
};
