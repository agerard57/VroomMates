import { Dispatch, SetStateAction, ChangeEvent } from "react";

export type UseThirdCarManager = (
  carInputsFilled: boolean,
  setCarInputsFilled: Dispatch<SetStateAction<boolean>>
) => {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
