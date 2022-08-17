/** @jsxImportSource @emotion/react */
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FC, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { I18nextProvider } from "react-i18next";

import "./App.css";
import { i18n } from "./i18n";
import { LoadingScreen } from "./loadingScreen";

const RouteManager = React.lazy(() => import("./routeManager"));

export const App: FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <I18nextProvider i18n={i18n}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerStyle={{ marginTop: "8vh" }}
          toastOptions={{
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
        {/* TODO Make component */}
        <RouteManager />
      </I18nextProvider>
    </Suspense>
  );
};
