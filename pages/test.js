import React, { useRef } from "react";

import useWindowWidth from "../utils/useWindowWidth";
import { motion, useScroll, useTransform } from "framer-motion";
import WhatICanHelpYouWith from "../components/WhatICanHelpYouWith";

export default function Page() {
  const { windowWidth, currentScreen } = useWindowWidth();

  return (
    <>
      <WhatICanHelpYouWith />
    </>
  );
}
