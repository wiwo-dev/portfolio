import React, { useRef, useState } from "react";
import Heading from "components/ui/Heading";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import ArrowRight from "components/Icons/ArrowRight";
import useWindowWidth from "utils/useWindowWidth";
import Image from "next/image";
import Link from "next/link";
import { Button } from "components/ui";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "utils/utils";

export default function ProjectsSection({ id, projects }) {
  const ref = useRef(null);
  const { windowWidth } = useWindowWidth();

  const [currentlyVisibleCount, setCurrentlyVisibleCount] = useState(7);

  return (
    <section id={id} className="min-h-screen bg-gray ">
      <div className="max-w-7xl mx-auto px-2 lg:px-7 py-20">
        <div className="text-center m-7">
          <Heading className="text-white" color="violet">
            My projects
          </Heading>
        </div>
        <p className="text-lg lg:text-xl lg:w-[80%] mx-auto text-center text-white mb-5 max-w-[65ch]">
          Take a look at my portfolio projects.
        </p>
        <div className="flex flex-col gap-5">
          {projects.map(
            (project, key) =>
              key < currentlyVisibleCount && (
                <Project
                  key={key}
                  title={project.title}
                  picture={project.picture}
                  description={project.description}
                  technologies={project.technologies}
                  href={project.href}
                  cta={project.cta}
                  githubUrl={project.githubUrl}
                  projectUrl={project.projectUrl}
                  year={project.year}
                />
              )
          )}

          {currentlyVisibleCount < projects.length && (
            <div className="flex justify-center">
              <Button variant="violet" onClick={() => setCurrentlyVisibleCount((current) => current + 1)}>
                Show more...
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, technologies = [], href = "#", cta, githubUrl, projectUrl, year }) {
  return (
    <div className="min-h-[200px] w-100 h-full max-lg:pt-16 border-[8px] rounded-[20px] rounded-tr-[60px] rounded-bl-[60px]  border-black bg-violet flex flex-col justify-between text-left gap-5 text-white p-10">
      <div className="flex flex-col gap-5">
        <p className="text-base sm:text-lg">{description}</p>
        <div className="flex flex-wrap gap-3 text-sm">
          {technologies.map((tech, ind) => (
            <span key={ind} className="bg-[#2A33E4] px-[16px] py-[8px] rounded-3xl antialiased">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className={cn("grid grid-cols-2 lg:grid-cols-3")}>
        <div className="">
          {githubUrl && (
            <Link href={githubUrl} className="flex items-center gap-2 uppercase hover:underline" target="_blank">
              GITHUB
              <Github size={16} />
            </Link>
          )}
        </div>

        <div className="row-start-2 lg:row-start-1">
          {projectUrl && (
            <Link
              href={projectUrl}
              className="flex items-center gap-2 uppercase hover:underline whitespace-nowrap"
              target="_blank">
              {cta ?? "OPEN"}
              <ExternalLink size={16} />
            </Link>
          )}
        </div>

        <Link href={href} className="text-right uppercase hover:underline whitespace-nowrap">
          READ MORE <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}

function Project({ title, description, picture, technologies = [], href, githubUrl, projectUrl, cta, year }) {
  const ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 77%"],
  });
  let { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref,
    offset: ["start end", "start 40%"],
  });
  let x1 = useTransform(useSpring(scrollYProgress), [0, 1], ["200px", "0px"]);
  let x2 = useTransform(useSpring(scrollYProgress), [0, 1], ["-200px", "0px"]);
  let y = useTransform(useSpring(scrollYProgress2), [0, 1], ["-200px", "0px"]);
  const { windowWidth } = useWindowWidth();

  return (
    <div
      ref={ref}
      className="flex flex-col-reverse max-w-screen-sm mx-auto lg:max-w-full lg:w-full lg:flex-row-reverse lg:gap-5">
      <motion.div style={{ x: windowWidth >= 1024 ? x2 : 0, y: windowWidth < 1024 ? y : 0 }} className="lg:w-1/2">
        <ProjectCard
          title={title}
          description={description}
          technologies={technologies}
          href={href}
          githubUrl={githubUrl}
          projectUrl={projectUrl}
          cta={cta}
          year={year}
        />
      </motion.div>
      <motion.div
        className="max-lg:z-20 relative max-lg:-mb-10 flex flex-col p-10 justify-center items-center border-[8px] rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] border-black bg-white  lg:w-1/2"
        style={{ x: windowWidth >= 1024 ? x1 : 0, minHeight: windowWidth > 768 ? "100%" : "100px" }}>
        <Link href={href} className="flex flex-col justify-center items-center">
          <Image src={`${picture}`} width={250} height={166} className="w-[250px]" alt={`Project ${title} logo`} />
          <p className="font-extrabold text-lg xs:text-xl md:text-2xl ">{title}</p>
        </Link>
        {year && <div className="absolute top-8 right-8 text-black/50 font-semibold text-[14px]">{year}</div>}
      </motion.div>
    </div>
  );
}
