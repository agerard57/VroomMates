/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, useEffect, useState } from "react";

import { Input, RoundedContour } from "../../core";
import HomeImage1 from "../assets/images/home-image-1.png";

export const LandingPage: FC = () => {
  const [helloWorld, setHelloWorld] = useState("");
  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/hello`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHelloWorld(data.message);
      });
  }, []);
  return (
    <>
      <div
        css={css`
          background-color: #5096ff;
          height: 100vh;
        `}
      >
        <h1
          css={css`
            font-family: "Baloo2";
            font-weight: 700;
            color: white;
          `}
        >
          Ready to go on a trip?
        </h1>
        <img
          src={HomeImage1}
          alt="home-image-1"
          css={css`
            width: 80%;
          `}
        />
        <RoundedContour>
          <div>
            <h2
              css={css`
                font-family: "Baloo2";
                font-weight: 550;
                color: black;
              `}
            >
              Let's find you a ride then!
            </h2>
            <hr />
            <Input inputTitle="Single Trip" />
          </div>
        </RoundedContour>
      </div>
      hellerzofozejfozejfzefjpomklop
    </>
  );
};

