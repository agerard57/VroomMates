import { FC, useEffect, useState } from "react";

import { BlueBorderBackground } from "../../core";

export const LandingPage: FC = () => {
  const [helloWorld, setHelloWorld] = useState("");
  useEffect(() => {
    const url= `${process.env.REACT_APP_API_URL}/hello`;
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setHelloWorld(data.message)});
    },[]);
  return(
  <>
    <BlueBorderBackground backgroundColor={"white"}>
      <hr />
      <h1>Hello there</h1>
      <p>{helloWorld}</p>
    </BlueBorderBackground>
  </>
)
}
