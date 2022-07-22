/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { Header } from "./header";

export const Layout: FC = ({ children }) => (
  <>
    <Header />
    <div className="App">{children}</div>
  </>
);
