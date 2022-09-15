/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const modalStyles = (isOpen: boolean) => {
  const animation = isOpen
    ? css`animation: slide-up 0.3s ease-in forwards;
      @keyframes slide-up {
        0% {
          transform: translateY(100%);
        }
        100% {
          transform: translateY(0);
        }
      }
    }`
    : css`
        animation: slide-down 0.3s ease-out forwards;
        @keyframes slide-down {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `;

  return css`
    background: #ffffff;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: "block";
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    ${animation}
  `;
};
