import { Dispatch, SetStateAction } from "react";

export type UseBecomeDriverModalBuilderManager = () => {
  slideNumber: number;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
  driverLicenseFilled: boolean;
  setDriverLicenseFilled: Dispatch<SetStateAction<boolean>>;
  carInputsFilled: boolean;
  setCarInputsFilled: Dispatch<SetStateAction<boolean>>;
};
