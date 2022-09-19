import { css } from "@emotion/react";

const closedSearchBox = css`
  padding: 10px;
  display: flex;
  text-transform: capitalize;

  .col-2,
  .col-5 {
    display: flex;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }

  .col-2 {
    font-size: 1.8rem;
    font-weight: 400;
  }

  .col-5 > .row:first-of-type {
    text-overflow: ellipsis;
    font-weight: 500;
    font-size: 1.2rem;
    color: #4d4d4d;
    white-space: nowrap;
    display: block;
    overflow: hidden;
    max-width: 100%;
  }

  .col-5 > .row:last-of-type {
    color: #999999;
  }
`;

export const SearchBoxStyles = {
  closedBox: closedSearchBox,
};
