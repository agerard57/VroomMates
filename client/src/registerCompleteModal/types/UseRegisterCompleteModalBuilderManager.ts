import { Dispatch, SetStateAction } from "react";

export type UseRegisterCompleteModalBuilderManager = () => {
  setProfilePicFilled: Dispatch<SetStateAction<boolean>>;
  setAboutInputsFilled: Dispatch<SetStateAction<boolean>>;
  finalPageAction: () => void;
};
