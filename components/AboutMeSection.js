import React, { useEffect, useRef, useState } from "react";
import Heading from "./ui/Heading";
import { motion, useScroll, useTransform } from "framer-motion";
import EmojiIconCircle from "./ui/EmojiIconCircle";
import StampTextIcon from "./Icons/StampTextIcon";

const aboutme = [
  "I am a Computer Science Engineer and have a Masters's degree in Management in Virtual Environments. My education gave me a deep understanding of digital projects' technical and business sides.",
  "I am a good communicator with developed soft skills. I can talk with all project stakeholders in business and technical languages. I know the budgeting process, and I can set and track targets. ",
  "Over the course of my career at Red Bull I have been managing a Team responsible for over 20 social media channels. I gained plenty of experience in all sorts of digital projects.",
  "My work has ranged from landing pages to complex systems and platforms. Starting with those with a modest budget where I coded some of the elements myself to the bigger ones in which I led the project with help from a variety of external agencies.",
  "My work has thought me the importance of high-quality branding. In my youth I also worked as a photographer, I learned Photoshop, Lightroom, and Illustrator which recently helped me quickly learn Figma which I use to design user interfaces.",
  "I’m also a certified kitesurfing, windsurfing, and skiing instructor. I’ve been teaching in many places around the globe. This experience influenced my ability to prepare presentations and present in front of people. Sharing knowledge in an understandable and easy-to-absorb manner is one of my skills. My spare time is filled with all kinds of sports. I’m currently working on improving my surfing and learning how to surf big waves.",
  "My spare time is filled with all kinds of sports. I’m currently working on improving my surfing and learning how to surf big waves.",
];

export default function AboutMeSection() {
  const ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["-100px", "100px"]);
  let roation = useTransform(scrollYProgress, [0, 1], ["-180deg", "180deg"]);
  const [yState, setYState] = useState(y.get());
  const [emoji, setEmoji] = useState("💻");
  const [stampIcon, setStampIcon] = useState();
  useEffect(
    () =>
      scrollYProgress.onChange((latest) => {
        setYState(latest);
        if (latest < 0.3) {
          //setEmoji("💻");
          setEmoji(<EmojiIconCircle size="100">💻</EmojiIconCircle>);
          setStampIcon(
            <StampTextIcon text="I KNOW WHAT AM I DOING">
              <img src="/emojis/computer.svg" />
            </StampTextIcon>
          );
        } else if (latest < 0.66) {
          setEmoji(<EmojiIconCircle size="100">📜</EmojiIconCircle>);
          setStampIcon(
            <StampTextIcon text="BUSINESS & TECHNOLOGY">
              <img src="/emojis/business.svg" />
            </StampTextIcon>
          );
        } else {
          setEmoji(<EmojiIconCircle size="100">🎯</EmojiIconCircle>);
          setStampIcon(
            <StampTextIcon text="TEAM & PROJECT MANAGEMENT">
              <img src="/emojis/target.svg" />
            </StampTextIcon>
          );
        }
      }),
    []
  );

  return (
    <section className="min-h-screen bg-yellow-base-base">
      <div id="about" className="flex justify-center p-5">
        <Heading className="">About me</Heading>
      </div>
      <div className="lg:flex relative max-w-7xl mx-auto " ref={ref}>
        <div className="text-2xl p-8 lg:w-1/2">
          {aboutme.map((el, ind) => (
            <p key={ind} className={ind > 0 && "mt-5"}>
              {el}
            </p>
          ))}
        </div>
        <div className=" bg-yellow-base-base p-5 sticky bottom-0 lg:top-0 lg:h-screen lg:w-1/2 flex justify-center items-center">
          <motion.div style={{ x: y, rotateZ: roation }}>{stampIcon}</motion.div>
        </div>
      </div>
    </section>
  );
}
