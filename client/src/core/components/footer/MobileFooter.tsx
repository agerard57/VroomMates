/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { useLanguage } from "../../../language";

export const MobileFooter: FC = () => {
  const { t } = useTranslation("Core");

  const { language, change } = useLanguage();

  return (
    <svg viewBox="0 0 320 579" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_221_1974)">
        <path
          d="M0 37H320V579H160H0V37Z"
          fill="url(#paint0_linear_221_1974)"
          fillOpacity="0.7"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#filter1_d_221_1974)">
        <path
          d="M-18.5 419.5L21.6805 431.16C60.2135 442.343 100.512 446.148 140.457 442.377V442.377C153.462 441.149 166.548 441.039 179.572 442.048L216.077 444.876C243.399 446.992 270.864 443.454 296.758 434.482L340 419.5L320 579H0L-18.5 419.5Z"
          fill="black"
          fillOpacity="0.03"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#filter2_d_221_1974)">
        <path
          d="M0 12L12.4258 14.8193C43.3603 21.838 75.5242 21.3616 106.237 13.4297L123.138 9.06493C189.328 -8.02919 259.512 0.147505 320 32V32V114L261.85 103.897C214.612 95.6893 166.338 95.3862 119 103V103L117.492 103.355C79.0227 112.406 39.4696 115.99 0 114V114V12Z"
          fill="url(#paint1_linear_221_1974)"
        />
      </g>
      <foreignObject x="0" y="27" width="320" height="579">
        <div
          css={css`
            text-align: center;
            color: white;
            display: flex;
            flex-direction: column;
          `}
        >
          <span
            css={css`
              text-align: center;
              font-weight: 700;
              font-size: 1rem;
              color: white;
              padding: 0.2rem;
            `}
          >
            {t("footer.language")}
          </span>
          <div
            css={css`
              font-weight: 700;
            `}
          >
            <span
              css={css`
                text-align: center;
                font-size: 1rem;
                color: ${language === "en"
                  ? "white"
                  : "rgba(255, 255, 255, 0.56)"};
                padding: 0.2rem;
              `}
              onClick={() => change("en")}
            >
              EN
            </span>
            |
            <span
              css={css`
                text-align: center;
                font-size: 1rem;
                color: ${language === "fr"
                  ? "white"
                  : "rgba(255, 255, 255, 0.40)"};
                padding: 0.2rem;
              `}
              onClick={() => change("fr")}
            >
              FR
            </span>
          </div>
        </div>
      </foreignObject>
      <foreignObject x="0" y="100" width="320" height="579">
        <div
          css={css`
            text-align: center;
            color: white;
            display: flex;
            flex-direction: column;
            padding: 1rem;
          `}
        >
          <span
            css={css`
              font-weight: 700;
              font-size: 1rem;
              color: white;
              padding: 0.2rem;
            `}
          >
            {t("footer.about.title")}
          </span>
          <span
            css={css`
              font-size: 1rem;
              color: white;
              font-weight: 300;
              font-size: 0.9rem;
            `}
          >
            {t("footer.about.text")}
          </span>
          <hr
            css={css`
              display: flex;
              flex-direction: column;
              padding: 0.5rem;
              padding-bottom: 0rem;
              margin-bottom: 0;
            `}
          />
          <span
            css={css`
              font-weight: 700;
              font-size: 1rem;
              padding: 0.2rem;
            `}
          >
            {t("footer.contact.title")}
          </span>
          <span
            css={css`
              font-weight: 300;
              font-size: 0.9rem;
              display: flex;
              flex-direction: column;

              a {
                color: white;
              }
            `}
          >
            <span>{t("footer.contact.me")}</span>
            <a href="mailto:vroommates@agerard.dev">
              {t("footer.contact.email")}
            </a>
          </span>
          <hr
            css={css`
              display: flex;
              flex-direction: column;
              padding: 0.5rem;
              padding-bottom: 0rem;
              margin-bottom: 0;
            `}
          />
          <span
            css={css`
              font-weight: 700;
              font-size: 1rem;
              padding: 0.2rem;
            `}
          >
            {t("footer.t&c.title")}
          </span>
          <span
            css={css`
              font-weight: 300;
              font-size: 0.9rem;
              display: flex;
              flex-direction: column;
              a {
                color: white;
              }
            `}
          >
            <Link to="/policies#termsAndConditions">
              {t("footer.t&c.privacyPolicy")}
            </Link>
            <Link to="/policies#cookies">{t("footer.t&c.cookiesPolicy")}</Link>
          </span>
        </div>
      </foreignObject>
      <foreignObject x="0" y="460" width="320" height="579">
        <div
          css={css`
            text-align: center;
            color: white;
            display: flex;
            flex-direction: column;
            padding: 1rem;
          `}
        >
          <button
            css={css`
              background-color: white;
              color: #91a5d8;
              border: none;
              border-radius: 0.5rem;
              font-size: 0.8rem;
              font-weight: 600;
            `}
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            {t("footer.button")}
          </button>
          <span
            css={css`
              font-size: 1rem;
              padding: 1rem 0;
              color: white;
              font-weight: 600;
              font-size: 0.9rem;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            `}
          >
            <span>{t("footer.bottom.left")}</span>
            <span>{t("footer.bottom.right")}</span>
          </span>
        </div>
      </foreignObject>
      <defs>
        <filter
          id="filter0_d_221_1974"
          x="-4"
          y="37"
          width="328"
          height="550"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_221_1974"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_221_1974"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_221_1974"
          x="-22.5"
          y="419.5"
          width="366.5"
          height="167.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_221_1974"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_221_1974"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_221_1974"
          x="0"
          y="0.329887"
          width="320"
          height="114.204"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_221_1974"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_221_1974"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_221_1974"
          x1="0.368635"
          y1="375.498"
          x2="531.742"
          y2="478.429"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0001" stopColor="#367FEF" stopOpacity="0.994792" />
          <stop offset="0.0260417" stopColor="#367FEF" />
          <stop offset="1" stopColor="#FF9877" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_221_1974"
          x1="52"
          y1="-107.5"
          x2="320"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A3C7FF" />
          <stop offset="0.390625" stopColor="#85B5FE" />
          <stop offset="1" stopColor="#C8B0C0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
