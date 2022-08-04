/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import fullLogo from "../../images/FullLogo.png";

export const MobileHeader: FC = () => (
  <Navbar
    fixed="top"
    css={css`
      padding: 0;
      a {
        margin-right: 0;
      }
    `}
  >
    <Container
      className="justify-content-center"
      css={css`
        position: absolute;
        height: 100%;
        width: 100%;
        top: -1vw;
      `}
    >
      <Navbar.Brand as={Link} to="/">
        <img
          src={fullLogo}
          alt="vroommates-logo"
          css={css`
            height: 13vw;
            left: 0;
            right: 0;
          `}
        />
      </Navbar.Brand>
    </Container>
    <svg
      viewBox="0 0 320 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      width="100%"
    >
      <g filter="url(#a)" fill="#fff">
        <path d="M0 0h320v18H0V0Z" />
        <path d="M67 16c0-8.837 7.163-16 16-16h154c8.837 0 16 7.163 16 16v13c0 8.837-7.163 16-16 16H83c-8.837 0-16-7.163-16-16V16ZM253 18h11a11.563 11.563 0 0 0-11 11V18ZM0 18h11l-5.818.646A7.73 7.73 0 0 0 0 21.5V18ZM320 18h-11l5.818.646A7.731 7.731 0 0 1 320 21.5V18ZM67 18H56a11.563 11.563 0 0 1 11 11V18Z" />
      </g>
      <defs>
        <filter
          id="a"
          x={-5}
          y={-1}
          width={330}
          height={55}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1447_1711"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1447_1711"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </Navbar>
);
