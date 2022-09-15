import { FC } from "react";

import { ModalContext } from "../contexts";
import { useModalManager } from "../hooks";

type Props = {
  children: React.ReactNode;
};

export const ModalProvider: FC<Props> = ({ children }) => {
  return (
    <ModalContext.Provider value={useModalManager()}>
      {children}
    </ModalContext.Provider>
  );
};
