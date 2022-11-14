import React, { useRef } from "react";
import Heading from "components/ui/Heading";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ArrowRight from "components/Icons/ArrowRight";
import useWindowWidth from "utils/useWindowWidth";

export default function ProjectsSection({ id }) {
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
    <section id={id} className="min-h-screen bg-gray ">
      <div className="max-w-7xl mx-auto p-2 lg:p-7">
        <div className="text-center m-7">
          <Heading className="text-white" color="violet">
            My projects
          </Heading>
        </div>
        <div className="flex flex-col gap-5">
          <Project
            title="Game in react"
            description="Do you remember playing Snake Game on Nokia 3210? I do! And that’s why decided to recreate the game as one of my
          portfolio projects."
            technologies={["React", "Tailwind CSS", "Firestore"]}
          />
          <Project
            title="Sorting Visualizer"
            description="This project is visualizing how sorting algorithms works. It helps to understand each step..."
            technologies={["React", "Chakra UI"]}
          />
          <Project
            title="Ecommerce platform"
            description="It’s an online shop which can be used for businesses that sell multiple products that are usually bought in more than one quantity."
            technologies={["NextJS", "React", "Prisma", "Tailwind CSS", "Stripe"]}
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, technologies = [], href }) {
  return (
    <div className="min-h-[200px] border-[8px] rounded-[20px] rounded-tr-[60px] rounded-bl-[60px]  border-black bg-violet flex flex-col text-left gap-5 text-white p-10">
      <p className="font-extrabold text-lg lg:text-xl">{title}</p>
      <p className="text-lg lg:text-xl">{description}</p>
      <div className="flex flex-wrap gap-3 text-sm">
        {technologies.map((tech, ind) => (
          <span key={ind} className="bg-[#2A33E4] px-[16px] py-[8px] rounded-3xl antialiased">
            {tech}
          </span>
        ))}
      </div>
      <a href="#" className="text-right">
        <span>
          READ MORE <ArrowRight size={20} />
        </span>
      </a>
    </div>
  );
}

function Project({ title, description, technologies = [], href }) {
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
    <div ref={ref} className="flex flex-row-reverse gap-5">
      <motion.div style={{ x: windowWidth >= 1024 ? x2 : 0 }} className="lg:w-1/2">
        <ProjectCard title={title} description={description} technologies={technologies} />
      </motion.div>
      <motion.div
        className="max-lg:hidden border-[8px] rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] border-black bg-white flex justify-center items-center lg:w-1/2"
        style={{ x: x1, minHeight: windowWidth > 768 ? "300px" : "100px", height: "160px" }}>
        <p className="font-extrabold text-3xl">{title}</p>
      </motion.div>
    </div>
  );
}
