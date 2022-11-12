import React, { useRef } from "react";
import Heading from "./ui/Heading";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ArrowRight from "./Icons/ArrowRight";
import useWindowWidth from "../utils/useWindowWidth";

export default function ProjectsSection() {
  const ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 70%"],
  });

  let x1 = useTransform(useSpring(scrollYProgress), [0, 1], ["200px", "0px"]);
  let x2 = useTransform(useSpring(scrollYProgress), [0, 1], ["-200px", "0px"]);
  //let x1Spring = useSpring(x1);
  //let x2Spring = useSpring(x2);

  const { windowWidth } = useWindowWidth();

  return (
    <section className="min-h-screen bg-yellow-base ">
      <div className="max-w-7xl mx-auto p-2 lg:p-7">
        <div className="text-center m-7">
          <Heading>My projects</Heading>
        </div>
        <div ref={ref} className="flex flex-row-reverse gap-5">
          <motion.div style={{ x: windowWidth >= 1024 ? x2 : 0 }} className="lg:w-1/2">
            <ProjectCard />
          </motion.div>
          <motion.div
            className="max-lg:hidden border-[8px] rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] border-black bg-white flex justify-center items-center lg:w-1/2"
            style={{ x: x1, minHeight: windowWidth > 768 ? "300px" : "100px", height: "160px" }}>
            <p className="font-extrabold text-3xl">Game in react</p>
          </motion.div>
        </div>
        <ProjectCard />
      </div>
    </section>
  );
}

function ProjectCard() {
  return (
    <div className="min-h-[200px] border-[8px] rounded-[20px] rounded-tr-[60px] rounded-bl-[60px]  border-black bg-violet flex flex-col text-left gap-5 text-white p-10">
      <p className="font-extrabold text-lg lg:text-xl">Game in react</p>
      <p className="text-lg lg:text-xl">
        Do you remember playing Snake Game on Nokia 3210? I do! And that’s why decided to recreate the game as one of my
        portfolio projects.{" "}
      </p>
      <div className="flex flex-wrap gap-3 text-sm">
        <span className="bg-[#2A33E4] px-[16px] py-[8px] rounded-3xl antialiased">React</span>
        <span className="bg-[#2A33E4] px-[16px] py-[8px] rounded-3xl antialiased">Tailwind CSS</span>
        <span className="bg-[#2A33E4] px-[16px] py-[8px] rounded-3xl antialiased">Firestore</span>
      </div>
      <a href="#" className="text-right">
        <span>
          READ MORE <ArrowRight size={20} />
        </span>
      </a>
    </div>
  );
}
