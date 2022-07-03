/** @jsxImportSource @emotion/react */
// eslint-disable-next-line import/no-internal-modules
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FC, Suspense } from "react";
import { ToastProvider } from "react-toast-notifications";

import "./App.css";
import { LoadingScreen } from "./loadingScreen";

const RouteManager = React.lazy(() => import("./routeManager"));

export const App: FC = () => (
  <Suspense fallback={<LoadingScreen />}>
    <ToastProvider>
      <RouteManager />
    </ToastProvider>
  </Suspense>
);
