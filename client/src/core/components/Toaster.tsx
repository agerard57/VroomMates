import { FC } from "react";
import { Toaster as DefaultToaster } from "react-hot-toast";

export const Toaster: FC = () => (
  <DefaultToaster
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
);
