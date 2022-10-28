import React, { useRef } from "react";
import Heading from "./ui/Heading";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ProjectsPanel() {
  const ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 70%"],
  });

  let x1 = useTransform(useSpring(scrollYProgress), [0, 1], ["200px", "0px"]);
  let x2 = useTransform(useSpring(scrollYProgress), [0, 1], ["-200px", "0px"]);
  //let x1Spring = useSpring(x1);
  //let x2Spring = useSpring(x2);

  return (
    <section className="min-h-screen bg-yellow ">
      <div className="max-w-7xl mx-auto p-7">
        <div className="text-center m-7">
          <Heading>My projects</Heading>
        </div>
        <div ref={ref} className="flex space-x-5 flex-row-reverse gap-5">
          <motion.div
            className="min-h-[300px] border-[8px] rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[20px] rounded-br-[20px] border-black bg-violet flex justify-center items-center flex-1"
            style={{ x: x2 }}>
            <div className="flex flex-col text-left gap-5 text-white p-16">
              <p className="font-extrabold text-xl">Game in react</p>
              <p className="text-xl">
                Do you remember playing Snake Game on Nokia 3210? I do! And that’s why decided to recreate the game as
                one of my portfolio projects.{" "}
              </p>
              <div className="flex space-x-5">
                <span className="bg-[#2A33E4] px-[16px] py-[8px] rounded-3xl antialiased">React</span>
                <span className="bg-[#2A33E4] px-[16px] py-[8px] rounded-3xl antialiased">Tailwind CSS</span>
                <span className="bg-[#2A33E4] px-[16px] py-[8px] rounded-3xl antialiased">Firestore</span>
              </div>
              <a href="#" className="text-right">
                READ MORE
              </a>
            </div>
          </motion.div>
          <motion.div
            className="min-h-[300px] border-[8px] rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] border-black bg-white flex justify-center items-center flex-1"
            style={{ x: x1 }}>
            <p className="font-extrabold text-6xl">Game in react</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
