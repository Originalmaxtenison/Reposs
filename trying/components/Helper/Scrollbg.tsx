"use client";

import React, { useEffect, useState } from "react";

const Scrollbg = () => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  });

  return (
    <div
      className={`fixed ${
        navBg ? "bg-indigo-800" : "fixed"
      } w-full transition-all duration-200 h-[12vh] z-[1]`}
    ></div>
  );
};

export default Scrollbg;
