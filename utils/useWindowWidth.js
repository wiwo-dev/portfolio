import React, { useEffect, useState } from "react";

const screens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentScreen, setCurrentScreen] = useState();

  const setScreen = (size) => {
    if (size < screens.md) setCurrentScreen("sm");
    else if (size < screens.lg) setCurrentScreen("md");
    else if (size < screens.xl) setCurrentScreen("lg");
    else if (size < screens["2xl"]) setCurrentScreen("xl");
    else setCurrentScreen("2xl");
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    function handleResize() {
      setWindowWidth(window.innerWidth);
      setScreen(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { windowWidth, currentScreen };
}

export default useWindowWidth;
