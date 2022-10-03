import { Dispatch, SetStateAction } from "react";

import { UserInputs } from "../interfaces";

export type Props = {
  userInputs: UserInputs;
  setUserInputs: Dispatch<SetStateAction<UserInputs>>;
};
