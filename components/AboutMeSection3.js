import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import StampTextIcon from "../components/Icons/StampTextIcon";
import useWindowWidth from "../utils/useWindowWidth";
import { motion, useScroll, useTransform } from "framer-motion";
import Heading from "./ui/Heading";
import UnderlineText from "./ui/UnderlineText";

const aboutme = [
  {
    title: "Education",
    iconText: "TRUST ME, I'M AN ENGENEER",
    body: () => (
      <pp>
        I am a <UnderlineText>Computer Science Engineer</UnderlineText> and have a Masters's degree in{" "}
        <UnderlineText>Management in Virtual Environments</UnderlineText>. My education gave me a deep understanding of
        digital projects' technical and business sides.
      </pp>
    ),
    icon: "computer.svg",
    stampSettings: {
      rotationOffset: -110,
      angle: 10,
      radious: 300,
      fontSize: 36,
      iconSize: 100,
      paddingTop: 20,
    },
  },
  {
    title: "Technology & Business",
    iconText: "I UNDERSTAND BUSINESS & TECHNOLOGY",
    body: () => (
      <p>
        I am a good communicator with developed soft skills. I can talk with all project stakeholders in{" "}
        <UnderlineText>business and technical languages</UnderlineText>. I know the budgeting process, and I can set and
        track targets.
      </p>
    ),
    icon: "target.svg",
    stampSettings: {
      rotationOffset: -100,
      angle: 9.9,
      radious: 300,
      fontSize: 36,
      iconSize: 120,
      paddingTop: 20,
    },
  },
  {
    title: "Corporate experiance",
    iconText: "TEAM & PROJECT MANAGEMENT",
    body: () => (
      <p>
        Over the course of my career at Red Bull I have been managing a Team responsible for over 20 social media
        channels. I gained plenty of <UnderlineText>experience in all sorts of digital projects</UnderlineText>. My work
        has ranged from landing pages to complex systems and platforms. Starting with those with a modest budget where I
        coded some of the elements myself to the bigger ones in which I led the project with help from a variety of
        external agencies.
      </p>
    ),
    icon: "business.svg",
    stampSettings: {
      rotationOffset: -140,
      angle: 12,
      radious: 300,
      fontSize: 36,
      iconSize: 120,
      paddingTop: 20,
    },
  },
  {
    title: "Aestetic design",
    iconText: "AESTETIC DESIGN AND GRAPHICS",
    body: () => (
      <p>
        My work has thought me the importance of <UnderlineText>high-quality design</UnderlineText>. In my youth I also
        worked as a photographer, I learned Photoshop, Lightroom, and Illustrator which recently helped me quickly learn
        Figma which I use to design user interfaces.
      </p>
    ),
    icon: "design.svg",
    stampSettings: {
      rotationOffset: -140,
      angle: 11,
      radious: 300,
      fontSize: 36,
      iconSize: 120,
      paddingTop: 20,
    },
  },
  {
    title: "Knowladge sharing & presenting",
    iconText: "I KNOW HOW TO SHARE KNOWLADGE",
    body: () => (
      <p>
        I’m also a certified kitesurfing, windsurfing, and skiing instructor. I’ve been teaching in many places around
        the globe. This experience influenced my ability to <UnderlineText>prepare presentations</UnderlineText> and{" "}
        <UnderlineText>present in front of people</UnderlineText>. <UnderlineText>Sharing knowledge</UnderlineText> in
        an understandable and easy-to-absorb manner is one of my skills.
      </p>
    ),
    icon: "teacher.svg",
    stampSettings: {
      rotationOffset: -150,
      angle: 11,
      radious: 300,
      fontSize: 36,
      iconSize: 120,
      paddingTop: 20,
    },
  },
  {
    title: "In my free time",
    iconText: "STAY ACTIVE",
    body: () => (
      <p>
        My spare time is filled with all kinds of sports. I’m currently working on improving my surfing and learning how
        to surf big waves.
      </p>
    ),
    icon: "surf.svg",
    stampSettings: {
      rotationOffset: -70,
      angle: 14,
      radious: 300,
      fontSize: 36,
      iconSize: 120,
      paddingTop: 20,
    },
  },
];

const settings = {
  stampRadious: 300,
  stampRadiousMobile: 160,
  stampsGap: 20,
};

export default function AboutMeSection() {
  const { windowWidth, currentScreen } = useWindowWidth();

  const stampsHorizontalWidthScroll = (aboutme.length + 0.2) * (settings.stampRadious + settings.stampsGap);

  const ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["10% end", "end 50%"],
  });

  let x = useTransform(scrollYProgress, [0, 1], [200, -stampsHorizontalWidthScroll]);
  let rotate = useTransform(scrollYProgress, [0, 1], [0, -1080]);

  const stampsRef = useRef();

  //used to mount "stamp icons" on mobile in the sticky box at the bottom of the screen
  const Portal = ({ targetRef, children }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
    return mounted && targetRef.current ? ReactDOM.createPortal(children, targetRef.current) : null;
  };

  const AboutMeParagraph = ({ children, onChange, stampsRef, stampBody, ...rest }) => {
    const ref = useRef();
    let { scrollYProgress } = useScroll({
      target: ref,
      offset: ["20% end", "end 10%"],
    });
    let x2 = useTransform(scrollYProgress, [0, 1], [windowWidth / 1.2, -windowWidth / 0.7]);
    let x = useTransform(
      scrollYProgress,
      [0, 0.35, 0.9, 1],
      [windowWidth, windowWidth * 0.1, -windowWidth * 0.9, -windowWidth]
    );
    let rotateZ = useTransform(scrollYProgress, [0, 1], [0, -720]);
    return (
      <>
        <div
          ref={ref}
          className="col-span-2 col-start-1 text-xl lg:text-2xl lg:min-h-[350px] flex items-center"
          {...rest}>
          {children}
        </div>
        <Portal targetRef={stampsRef}>
          <motion.div style={{ x, rotateZ, position: "absolute" }} transition={{}}>
            {stampBody}
          </motion.div>
        </Portal>
      </>
    );
  };

  const introRef = useRef();

  return (
    <>
      <section className=" bg-yellow ">
        <div id="ABOUT ME INTRO" ref={introRef} className="lg:flex gap-5 mx-auto max-w-screen-2xl px-[32px] pt-20">
          <div className="md:w-[40%]">
            <Heading>About me</Heading>
          </div>
          <div className="md:w-[60%]">
            <p className="text-xl lg:text-2xl leading-relaxed">
              In my work, I strive to create thoughtful, user-centered experiences that adhere to web standards. I build
              websites and web applications using JavaScript, React and NextJS. In order to “make it pop” I use Framer
              Motion for animations.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-yellow ">
        <div className="mx-auto max-w-screen-2xl px-[32px]">
          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-10">
            {aboutme.map((el, ind) => (
              <AboutMeParagraph
                stampsRef={stampsRef}
                stampBody={
                  <StampTextIcon
                    text={el.iconText}
                    {...el.stampSettings}
                    radious={160}
                    fontSize={20}
                    paddingTop={10}
                    iconSize={50}
                    innerCircleMaring={38}>
                    <img src={`/emojis/${el.icon}`} />
                  </StampTextIcon>
                }
                key={ind}
                onChange={(x) => {}}>
                <el.body />
              </AboutMeParagraph>
            ))}
            {windowWidth >= 1024 &&
              aboutme.map((el, ind) => (
                <div
                  key={ind}
                  className="col-span-1 col-start-3 row-start-1 row-span-6 bg-blue "
                  style={{ gridRowStart: ind + 1, gridRowEnd: aboutme.length + 1 }}>
                  <div key={ind} className="sticky top-0 flex justify-center pt-10">
                    <StampTextIcon text={el.iconText} {...el.stampSettings} radious={settings.stampRadious}>
                      <img src={`/emojis/${el.icon}`} />
                    </StampTextIcon>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {windowWidth < 1024 && (
          <div
            id="STAMPS REF"
            ref={stampsRef}
            className=" bg-yellow p-5 sticky bottom-0 flex flex-nowrap justify-center items-center overflow-hidden mt-[0vh] h-[200px]"></div>
        )}
      </section>
    </>
  );
}
