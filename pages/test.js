import React, { useRef } from "react";

import useWindowWidth from "../utils/useWindowWidth";
import { motion, useScroll, useTransform } from "framer-motion";

import { ContactSection, FooterSection } from "../components/sections";

export default function Page() {
  const { windowWidth, currentScreen } = useWindowWidth();

  return (
    <>
      <section id="testsection" className="min-h-[80vh] bg-pink"></section>
      <ContactSection />
      <FooterSection />
    </>
  );
}
