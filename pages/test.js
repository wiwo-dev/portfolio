import React, { useRef } from "react";

import useWindowWidth from "../utils/useWindowWidth";
import { motion, useScroll, useTransform } from "framer-motion";
import WhatICanHelpYouWith from "../components/WhatICanHelpYouWith";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

export default function Page() {
  const { windowWidth, currentScreen } = useWindowWidth();

  return (
    <>
      <section id="testsection" className="min-h-[80vh] bg-pink"></section>
      <ContactSection />
      <section id="testsection" className="min-h-[50vh] bg-pink"></section>
    </>
  );
}
