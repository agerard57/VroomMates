import { Dispatch, SetStateAction } from "react";

import { SlideSpec } from "./SlideSpec";

export type UseModalManager = {
  isOpen: boolean;
  slideSpecs: SlideSpec[];
  openModal: (slideSpecs: SlideSpec[]) => void;
  closeModal: () => void;
  iterator: {
    previous: () => void;
    slideNumber: number;
    next: () => void;
  };
  isDisabled: boolean;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
};
