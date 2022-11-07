import React, { useEffect, useRef, useState } from "react";
import StampTextIcon from "../components/Icons/StampTextIcon";
import useWindowWidth from "../utils/useWindowWidth";
import { motion, useScroll, useTransform } from "framer-motion";
import Heading from "./ui/Heading";

const aboutme = [
  {
    title: "Education",
    iconText: "TRUST ME, I'M AN ENGENEER",
    body: "I am a Computer Science Engineer and have a Masters's degree in Management in Virtual Environments. My education gave me a deep understanding of digital projects' technical and business sides.",
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
    body: "I am a good communicator with developed soft skills. I can talk with all project stakeholders in business and technical languages. I know the budgeting process, and I can set and track targets. ",
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
    body: "Over the course of my career at Red Bull I have been managing a Team responsible for over 20 social media channels. I gained plenty of experience in all sorts of digital projects. My work has ranged from landing pages to complex systems and platforms. Starting with those with a modest budget where I coded some of the elements myself to the bigger ones in which I led the project with help from a variety of external agencies.",
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
    body: "My work has thought me the importance of high-quality branding. In my youth I also worked as a photographer, I learned Photoshop, Lightroom, and Illustrator which recently helped me quickly learn Figma which I use to design user interfaces.",
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
    body: "I’m also a certified kitesurfing, windsurfing, and skiing instructor. I’ve been teaching in many places around the globe. This experience influenced my ability to prepare presentations and present in front of people. Sharing knowledge in an understandable and easy-to-absorb manner is one of my skills. My spare time is filled with all kinds of sports. I’m currently working on improving my surfing and learning how to surf big waves.",
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
    body: "My spare time is filled with all kinds of sports. I’m currently working on improving my surfing and learning how to surf big waves.",
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
  stampRadiousMobile: 200,
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

  const AboutMeParagraph = ({ children, onChange, ...rest }) => {
    const ref = useRef();
    let { scrollYProgress } = useScroll({
      target: ref,
      offset: ["10% end", "end 0%"],
    });
    let x = useTransform(scrollYProgress, [0, 1], [200, -200]);

    useEffect(() => {
      x.onChange((latest) => onChange(latest));
    }, []);

    return (
      <div
        ref={ref}
        className="col-span-2 col-start-1 text-xl lg:text-2xl lg:min-h-[350px] flex items-center"
        {...rest}>
        {children}
      </div>
    );
  };

  const [stampsXArray, setStampsXArray] = useState(Array(aboutme.length));
  useEffect(() => {
    console.log(stampsXArray);
  }, [stampsXArray]);

  return (
    <>
      <section className="min-h-screen bg-yellow py-[100px]">
        <div className="mx-auto max-w-screen-2xl px-[32px]">
          <div className="lg:flex gap-5">
            <div className="md:w-[40%]">
              <Heading>About me</Heading>
            </div>
            <div className="md:w-[60%]">
              <p className="text-xl lg:text-2xl leading-relaxed">
                In my work, I strive to create thoughtful, user-centered experiences that adhere to web standards. I
                build websites and web applications using JavaScript, React and NextJS. In order to “make it pop” I use
                Framer Motion for animations.
              </p>
            </div>
          </div>

          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
            {aboutme.map((el, ind) => (
              //   <div key={ind} className="col-span-2 col-start-1 text-xl lg:text-2xl lg:min-h-[350px] flex items-center">
              //     {el.body}
              //   </div>
              <AboutMeParagraph
                key={ind}
                onChange={(x) => {
                  //console.log(x);
                  let copy = [...stampsXArray];
                  copy[ind] = x;
                  setStampsXArray([...copy]);

                  //   setStampsXArray((current) =>
                  //     current.map((obj, cind) => {
                  //       if (ind === cind) return x;
                  //       return obj;
                  //     })
                  //   );
                }}>
                {el.body}
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
            className=" bg-yellow p-5 sticky bottom-0 flex flex-nowrap items-center overflow-hidden mt-[0vh]"
            style={{ gap: `${settings.stampsGap}px` }}>
            {aboutme.map((el, ind) => (
              <motion.div style={{ x: stampsXArray[ind] }} key={ind} className="h-[300px]">
                <div style={{}} className="absolute top-0 bottom-0 left-0 right-0 h-[300px]">
                  <StampTextIcon
                    text={el.iconText}
                    {...el.stampSettings}
                    radious={settings.stampRadiousMobile}
                    fontSize={20}
                    paddingTop={10}
                    iconSize={85}
                    innerCircleMaring={38}>
                    <img src={`/emojis/${el.icon}`} />
                  </StampTextIcon>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
