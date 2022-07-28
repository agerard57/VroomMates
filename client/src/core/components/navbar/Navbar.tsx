/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import { useTranslation } from "react-i18next";

import { DashboardIcon } from "./DashboardIcon";
import { HomeIcon } from "./HomeIcon";
import { InboxIcon } from "./InboxIcon";
import { SearchIcon } from "./SearchIcon";

export const Navbar: FC = () => {
  const { t } = useTranslation("core");
  return (
    <>
      <div
        css={css`
          box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.40);
          position: sticky;
          background-color: #ffffff;
          bottom: 0;
        font-family: "Baloo2";
        font-weight: 650;
        a{
            text-decoration: none;
            padding-top:2%
            padding-bottom:2%
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
          
          .col{
            text-align: center;
        }
        `}/* TODO: REMOVE THE CSS RULES AS WE WANT TO TO IT ANOTHER WAY */
      >
        <Container className="d-flex justify-content-center">
          <Col>
            <Nav.Link href="/home">
              <a>
                <HomeIcon />
              </a>
              <br />
              <a className="selectedBlue">{t("navbar.home")}</a>
            </Nav.Link>
          </Col>

          <Col>
            <Nav.Link href="/home">
              <a>
                <SearchIcon />
              </a>
              <br />
              <a className="notSelectedBlue">{t("navbar.search")}</a>
            </Nav.Link>
          </Col>

          <Col>
            <Nav.Link href="/home">
              <a>
                <InboxIcon />
              </a>
              <br />
              <a className="selectedOrange">{t("navbar.inbox")}</a>
            </Nav.Link>
          </Col>

          <Col>
            <Nav.Link href="/home">
              <a>
                <DashboardIcon />
              </a>
              <br />
              <a className="notSelectedOrange">{t("navbar.dashboard")}</a>
            </Nav.Link>
          </Col>
        </Container>
      </div>
    </>
  );
};
