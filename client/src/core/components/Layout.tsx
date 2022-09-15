/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { Modal } from "../../modal";
import { Toaster } from "./Toaster";
import { Header } from "./header";
import { Navbar } from "./navbar";

export const Layout: FC = ({ children }) => (
  <>
    <Toaster />
    <Modal />
    <Header />
    <div className="App">{children}</div>
    <Navbar />
  </>
);
