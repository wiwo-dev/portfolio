import Image from "next/image";
import React, { useRef } from "react";
import Button from "./ui/Button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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
        className="flex flex-col min-h-[70vh] lg:flex-row pt-16 max-w-screen-2xl mx-auto lg:gap-20 overflow-hidden">
        <motion.div
          style={{ y: yParalaxLeft }}
          className="lg:w-1/2 min-h-[70vh] lg:min-h-[80vh] lg:min-h-[70vh] flex flex-col justify-center items-left px-10">
          <h1 className="text-6xl font-extrabold mb-2 tracking-tight">Hello</h1>
          <p className="text-3xl font-bold tracking-tight">I&apos;m Wojciech Więcławski</p>
          <p className="mt-7 text-xl lg:text-2xl">
            I’m a developer with 10 years of experience in the corporate world of Digital Marketing, Social Media, and
            Video Production.{" "}
          </p>
          <p className="mt-7 text-xl lg:text-2xl">
            I’m currently looking for new job opportunities as a Web Developer.{" "}
          </p>
          <div className="space-x-5 py-7">
            <Button>Contact me</Button>
            <Button variant="light">Contact me</Button>
          </div>
        </motion.div>
        <div
          id="RIGHT PANEL"
          className="flex justify-center lg:justify-end items-end px-[32px] lg:absolute lg:right-0 lg:bottom-0 lg:-z-10 lg:w-[50vw] 2xl:relative">
          <div className="relative w-[600px] 2xl:w-full">
            <motion.img style={{ y: yParalax2 }} src="/HeroHeader/blob.svg" width={800} alt="blob" />
            <motion.img
              style={{ y: yParalax1 }}
              src="/HeroHeader/hero-frame.svg"
              width={820}
              className="absolute bottom-0 left-0"
              alt="hero-frame"
            />
            <img
              src="/HeroHeader/wiwo2.png"
              width={800}
              className="absolute bottom-0 max-lg:left-[10%] lg:right-0"
              alt="Wojciech Wieclawski"
            />
            <motion.img
              style={{ rotateZ: rotation }}
              src="/HeroHeader/hand-hello-circle.svg"
              height={140}
              width={140}
              className="absolute bottom-0 left-[65%] lg:right-20%"
              alt="hand-hello-circle"
            />
          </div>
        </div>
      </main>
    </section>
  );
}
