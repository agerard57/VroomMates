/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";

import { MusicElement } from "./MusicElement";
import { PetElement } from "./PetElement";
import { TalkElement } from "./TalkElement";

type Props = { talk?: boolean; music?: boolean; pet?: boolean };

export const AboutList: FC<Props> = ({ talk, music, pet }) =>
  talk !== undefined && music !== undefined && pet !== undefined ? (
    <Row
      css={css`
        text-align: left;
        .row {
          margin: 10px 0;
        }
      `}
    >
      <TalkElement talk={talk} />
      <MusicElement music={music} />
      <PetElement pet={pet} />
    </Row>
  ) : null;
