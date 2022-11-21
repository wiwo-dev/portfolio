import React from "react";
import Head from "next/head";
import Navbar from "components/Navbar/Navbar";
import { FooterSection, ProjectsSection } from "components/sections";
import Heading from "components/ui/Heading";
import Button from "components/ui/Button";
import { ArrowRight, GithubIcon } from "components/Icons";

const data = {
  technologies: ["React", "Tailwind CSS", "Firestore"],
};

export default function Project() {
  return (
    <div className="">
      <Head>
        <title>wiwoproduction.com</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ProjectHeader />
      <div className="mx-auto max-w-screen-xl px-[32px] flex flex-wrap gap-5 py-8 justify-center md:justify-start">
        <Button href="/#contact">
          <span className="flex items-center gap-2">
            OPEN THE PROJECT <ArrowRight color="black" />
          </span>
        </Button>
        <Button variant="light">
          <span className="flex items-center gap-3">
            CHECK THE CODE
            <GithubIcon color="black" size={24} />
          </span>
        </Button>
      </div>
      <div className="flex flex-col md:flex-row mx-auto max-w-screen-xl px-[32px] min-h-[80vh] gap-20 py-10">
        <div className="md:w-[70%]">
          <p>
            Do you remember playing Snake Game on Nokia 3210? I do! And that’s why decided to recreate the game as one
            of my portfolio projects. It is built in React with Tailwind CSS used for styling. Highscores are stored in
            Google’s Cloud Firestore.
          </p>

          <p>
            It is fully responsive and works both on mobile and desktop. Users can control the snake with the keyboard
            or buttons on touch screens.
          </p>
        </div>
        <div className="md:w-[30%]">
          <h3 className="font-bold mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            {data.technologies.map((el, ind) => (
              <span key={ind} className="bg-yellow-base px-[16px] py-[8px] rounded-3xl antialiased">
                {el}
              </span>
            ))}
          </div>
        </div>
      </div>
      <ProjectsSection />
      <FooterSection />
    </div>
  );
}

function ProjectHeader() {
  return (
    <div className="bg-yellow-base">
      <div className="pt-24 pb-12 mx-auto max-w-screen-xl px-[32px] flex flex-col items-center md:items-start gap-5">
        <div className="bg-white rounded-[30px] rounded-tl-[60px] rounded-br-[60px] p-[30px] w-fit">
          <img src="projects/snake-game.png" className="w-[200px]" />
        </div>
        <Heading>Snake Game</Heading>
        <p className="font-bold">Fully responsive game written in React.</p>
      </div>
    </div>
  );
}
