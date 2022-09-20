/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { Modal } from "../../modal";
import { Header } from "./header";
import { Navbar } from "./navbar";

export const Layout: FC = ({ children }) => (
  <>
    <Modal />
    <Header />
    <div className="App">{children}</div>
    <Navbar />
  </>
);
