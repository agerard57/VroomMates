/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { useProfileBanner } from "../../hooks";

type Props = {
  id: string;
};

export const ProfileBanner: FC<Props> = ({ id }) => {
  const { profilePicSrc } = useProfileBanner(id);

  return (
    <div
      css={css`
        background: linear-gradient(
            90deg,
            rgba(69, 100, 255, 0.84) 0.62%,
            rgba(253, 101, 78, 0.84) 102.81%
          ),
          url(${profilePicSrc});
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.18);
        height: 40vh;
        background-size: cover;
        color: white;
        padding: 0;
        width: -webkit-fill-available;
        transform: translateY(-10vh);
        clip-path: polygon(0 25%, 100% 25%, 100% 75%, 0 75%);
      `}
    />
  );
};
