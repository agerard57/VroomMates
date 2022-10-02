import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import { App } from "../App";
import { ModalProvider } from "../modal";

it("loading screen", async () => {
  const loading = renderer
    .create(
      <div>
        <ModalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalProvider>
      </div>
    )
    .toJSON();

  expect(loading).toMatchSnapshot();
});
