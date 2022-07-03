/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { Flags } from "./flags";

export const Layout: FC = ({ children }) => (
  <div className="App">
    <Flags />
    {children}
  </div>
);
