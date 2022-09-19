import { Dispatch, SetStateAction, ChangeEvent, MutableRefObject } from "react";

export type UseSecondProfilePicManager = (
  setProfilePicFilled: Dispatch<SetStateAction<boolean>>
) => {
  profilePic: string;
  inputClickHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  inputFile: MutableRefObject<HTMLInputElement | null>;
};
