import { Dispatch, SetStateAction, ChangeEvent, MutableRefObject } from "react";

export type UseSecondDriverLicenseManager = (
  driverLicenseFilled: boolean,
  setDriverLicenseFilled: Dispatch<SetStateAction<boolean>>
) => {
  driverLicense: string;
  inputClickHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  inputFile: MutableRefObject<HTMLInputElement | null>;
};
