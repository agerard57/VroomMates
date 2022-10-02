import puppeteer from "puppeteer";

// import {SignInPage} from "../signInPage";

let browser;
// const app = "<rootDir>/src/SignInPage/index.ts";
// let lib = require ("libatk");

test("test open goto", async () => {
  browser = await await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://www.google.com/");
  await browser.close();

  // await page.click("inputName#email");
  // await page.type("inputName#email", "");
  // const emailInput = await page.$eval("inputName#email", (input) => input.className);
  // expect(emailInput).toBe("invalid");
  // await page.screenshot({path: "./test.png"});

  // await browser.close();
});
