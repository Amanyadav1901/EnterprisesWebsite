import React from "react";
import HomePage from "./Pages/HomePage";
import Feedbacks from "./Clientele/Feedbacks";
import Contact from "./contact/Contact";
import { StarsCanvas } from "./contact/canvas";

const MainPage = () => {
  return (
    <div>
      <HomePage />
      <Feedbacks />
      <div className=" bg-black relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default MainPage;
