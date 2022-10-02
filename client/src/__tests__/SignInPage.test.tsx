import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import { ModalProvider } from "../modal";
import { SignInPage } from "../signInPage";

it("SignInPage", async () => {
  const signInId = await document.querySelector("#signInId");
  // const output = render(<Layout />);
  // expect(document).toBeDefined();

  const signInPage = renderer
    .create(
      <div>
        <ModalProvider>
          <BrowserRouter>
            <SignInPage />
          </BrowserRouter>
        </ModalProvider>
      </div>
    )
    .toJSON();
  expect(signInPage).toMatchSnapshot();
  expect(signInPage).toBeDefined();

  if (!signInId) throw new Error("signInId is null, user logged");

  expect(signInId.innerHTML).toHaveLength(1);
});
