import { useState } from "react";

import { EmptyModal } from "../components";
import { SlideSpec, UseModalManager } from "../types";

export const useModalManager = (): UseModalManager => {
  const emptySlideSpec: SlideSpec[] = [
    { content: <EmptyModal />, nextButtonText: "" },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [slideSpecs, setSlideSpecs] = useState<SlideSpec[]>(emptySlideSpec);
  const [slideNumber, setSlideNumber] = useState<number>(0);

  const openModal = (slideSpecs: SlideSpec[]) => {
    setSlideNumber(0);
    setSlideSpecs(slideSpecs);
    setIsOpen(true);
  };

  const previous = () =>
    slideNumber === 0 ? closeModal() : setSlideNumber(slideNumber - 1);
  const last = slideSpecs.length - 1;
  const next = () =>
    slideNumber === last ? closeModal() : setSlideNumber(slideNumber + 1);

  const closeModal = () => {
    setIsOpen(false);
    setSlideSpecs(emptySlideSpec);
    setSlideNumber(0);
  };

  return {
    isOpen,
    slideSpecs,
    openModal,
    closeModal,
    iterator: { previous, slideNumber, next },
  };
};
