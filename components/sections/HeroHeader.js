import Image from "next/image";
import React, { useRef } from "react";
import Button from "components/ui/Button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import UnderlineText from "components/ui/UnderlineText";
import { ArrowRight } from "components/Icons";

export default function HeroHeader() {
  const scrollRef = useRef();
  let { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });
  let rotation = useTransform(useSpring(scrollYProgress), [0, 1], ["0deg", "1080deg"]);
  let yParalax1 = useTransform(scrollYProgress, [0, 1], [50, 200]);
  let yParalax2 = useTransform(scrollYProgress, [0, 1], [-20, 200]);
  let yParalaxLeft = useTransform(scrollYProgress, [0, 1], [-10, 100]);

  return (
    <section className="relative">
      <main
        ref={scrollRef}
        className="flex flex-col min-h-[92vh] lg:flex-row lg:justify-between pt-16 max-w-screen-2xl mx-auto overflow-hidden">
        <motion.div
          style={{ y: yParalaxLeft }}
          className="lg:w-1/2 flex flex-col justify-center items-left px-10 max-lg:pt-16">
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-2 tracking-tight">
            <UnderlineText color="yellow-base">Hello</UnderlineText>
          </h1>
          <p className="text-xl lg:text-2xl font-bold tracking-tight">I&apos;m Wojciech Więcławski</p>
          <p className="mt-7 text-lg">
            I’m a Web Developer with 10 years of experience in the corporate world of Digital Marketing, Social Media,
            and Video Production.
          </p>
          <p className="mt-7 text-lg">I’m currently looking for new job opportunities as a Web Developer.</p>
          <div className="flex gap-5 py-7">
            <Button href="/#contact">
              <span className="flex items-center gap-2">
                Contact me <ArrowRight color="black" />
              </span>
            </Button>
            {/* <Button variant="light">Contact me</Button> */}
          </div>
        </motion.div>
        <div
          id="RIGHT PANEL"
          className="flex justify-center  lg:min-h-full lg:justify-end items-end max-md:px-[32px] lg:-z-10 2xl:relative max-lg:overflow-hidden">
          <div className="relative w-[500px] lg:w-[600px] pt-[120px]">
            <motion.div style={{ y: yParalax2 }}>
              <motion.img
                src="/HeroHeader/blob.svg"
                alt="blob"
                className="relative bottom-0 max-lg:left-[50%] max-lg:-translate-x-1/2 lg:right-[3%] 2xl:right-0 w-[500px] lg:w-[700px] "
              />
            </motion.div>
            <motion.div style={{ y: yParalax1 }}>
              <motion.img
                src="/HeroHeader/hero-frame.svg"
                className="absolute bottom-0 max-lg:left-[50%] max-lg:-translate-x-1/2 lg:-right-[0%] 2xl:right-10 w-[500px] lg:w-[700px]"
                alt="hero-frame"
              />
            </motion.div>
            <motion.img
              src="/HeroHeader/wiwo2.png"
              className="absolute bottom-0 max-lg:left-[50%] max-lg:-translate-x-1/2 lg:-right-[4%] 2xl:right-0 w-[500px] lg:w-[700px] "
              alt="Wojciech Wieclawski"
            />
            {/* <motion.img
              style={{ rotateZ: rotation }}
              src="/HeroHeader/hand-hello-circle.svg"
              className="absolute bottom-0 right-[30px] lg:-right-[0px] xl:-right-[0px] w-[100px] md:w-[200px] lg:w-[250px]"
              alt="hand-hello-circle"
            /> */}

            <motion.img
              style={{ rotateZ: rotation }}
              src="/HeroHeader/hand-hello-circle.svg"
              className="absolute bottom-[1%] right-[30px] lg:-right-[0px] xl:right-[30px] max-md:w-[25vw] lg:w-[250px]"
              alt="hand-hello-circle"
            />
          </div>
        </div>
      </main>
    </section>
  );
}
