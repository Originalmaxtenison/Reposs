"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Catelogue from "./Catelogue/Catelogue";
import Review from "./Review/Review";
import Scrollbg from "../Helper/Scrollbg";

import AOS from "aos";
import "aos/dist/aos.css"; //you can also use Link for styles

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return (
    <div>
      <Scrollbg />
      <Hero />
      <About />
      <Catelogue />
      <Review />
    </div>
  );
};

export default Home;
