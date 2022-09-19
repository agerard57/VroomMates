import { Dispatch, SetStateAction } from "react";

import { ThirdAboutProps } from "./ThirdAbout";

export type UseThirdAboutManager = (
  setAboutInputsFilled: Dispatch<SetStateAction<boolean>>
) => ThirdAboutProps;
