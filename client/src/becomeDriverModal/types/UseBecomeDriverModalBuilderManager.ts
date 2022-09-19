import { Dispatch, SetStateAction } from "react";

export type UseBecomeDriverModalBuilderManager = () => {
  setDriverLicenseFilled: Dispatch<SetStateAction<boolean>>;
  setCarInputsFilled: Dispatch<SetStateAction<boolean>>;
  userAlreadyRequested: boolean;
};
