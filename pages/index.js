import Head from "next/head";
import Navbar from "components/Navbar/Navbar";

import {
  HeroHeader,
  IntroSection,
  AboutMeSection,
  TechnologiesSection,
  TheProcessSection,
  ProjectsSection,
  ContactSection,
  FooterSection,
  WhatICanHelpYouWithSection,
} from "../components/sections";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Wojciech Wieclawski</title>
        <meta name="description" content="Web Developer with corporate experiance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroHeader />
      <IntroSection />
      <WhatICanHelpYouWithSection />
      <AboutMeSection id="aboutme" />
      <section className="bg-gray -mt-[250px] pt-[240px]"></section>
      <ProjectsSection id="projects" />
      {/* <TheProcessSection id="process" /> */}
      <ContactSection id="contact" />
      <FooterSection />
    </div>
  );
}
