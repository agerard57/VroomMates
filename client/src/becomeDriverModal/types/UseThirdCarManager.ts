import { Dispatch, SetStateAction, ChangeEvent } from "react";

export type UseThirdCarManager = (
  setCarInputsFilled: Dispatch<SetStateAction<boolean>>
) => {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
