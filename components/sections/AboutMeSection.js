import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import StampTextIcon from "components/Icons/StampTextIcon";
import useWindowWidth from "utils/useWindowWidth";
import { motion, useScroll, useTransform } from "framer-motion";
import Heading from "components/ui/Heading";
import UnderlineText from "components/ui/UnderlineText";
import Button from "components/ui/Button";
import ArrowRight from "components/Icons/ArrowRight";
import CVIcon from "components/Icons/CVIcon";
import RotateOnScroll from "components/scroll/RotateOnScroll";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
const twFullConfig = resolveConfig(tailwindConfig);

const underlineColor = twFullConfig.theme.colors["white"];

const aboutme = [
  {
    title: "Education",
    iconText: "TRUST ME, I'M AN ENGENEER",
    body: () => (
      <>
        I am a <UnderlineText color={underlineColor}>Computer Science Engineer</UnderlineText> and have a Masters's
        degree in <UnderlineText color={underlineColor}>Management in Virtual Environments</UnderlineText>. <br />
        I'm a Developer who understands digital marketing, thanks to the valuable lessons (and maybe a few energy
        drinks) I picked up while working at Red Bull.
      </>
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
      <>
        I’m a strong communicator, comfortable speaking both{" "}
        <UnderlineText color={underlineColor}>business and technical languages</UnderlineText>. I understand budgeting,
        set and track targets, and stay easygoing yet professional and quality-focused.
      </>
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
      <>
        At Red Bull, I managed a team overseeing over 20 social media channels and gained plenty of{" "}
        <UnderlineText color={underlineColor}>experience in all sorts of digital projects</UnderlineText> from landing
        pages to complex systems and platforms.
        <br />
        <br />
        {/* <div className="mt-3" /> */}
        I’ve collaborated with teams across Australia, Indonesia, Europe, India, and the US, combining technical
        expertise with strong communication and management skills to deliver quality results.
      </>
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
      <>
        My work has taught me the value of{" "}
        <UnderlineText color={underlineColor}>high-quality design and branding</UnderlineText>. Back in the days I used
        to work as a photographer and video editor. I know Adobe package, Final Cut and of course Figma, which helps me
        communicate effectively with designers.
        <br />
        <br />I also have a passion for crafting sleek{" "}
        <UnderlineText color={underlineColor}>micro-animations</UnderlineText> and interactive elements that make
        websites truly come alive.
      </>
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
      <>
        I’m also a certified kitesurfing, windsurfing, and skiing instructor. Why am I mentioning this in my dev
        portfolio? It has influenced my ability to{" "}
        <UnderlineText color={underlineColor}>prepare presentations</UnderlineText> and{" "}
        <UnderlineText color={underlineColor}>present confidently in front of people</UnderlineText> and{" "}
        <UnderlineText color={underlineColor}>sharing knowledge</UnderlineText> in a clear and easy-to-understand
        manner.
      </>
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
  // {
  //   title: "In my free time",
  //   iconText: "STAY ACTIVE",
  //   body: () => (
  //     <>
  //       My spare time is filled with all kinds of sports. I’m currently working on improving my surfing and learning how
  //       to surf big waves.
  //     </>
  //   ),
  //   icon: "surf.svg",
  //   stampSettings: {
  //     rotationOffset: -70,
  //     angle: 14,
  //     radious: 300,
  //     fontSize: 36,
  //     iconSize: 120,
  //     paddingTop: 20,
  //   },
  // },
];

const settings = {
  stampRadious: 300,
  stampRadiousMobile: 160,
  stampsGap: 20,
};

export default function AboutMeSection({ id }) {
  const { windowWidth } = useWindowWidth();

  //const stampsHorizontalWidthScroll = (aboutme.length + 0.2) * (settings.stampRadious + settings.stampsGap);

  const ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["10% end", "end 50%"],
  });

  let stampsFieldBackground = useTransform(scrollYProgress, [0, 1], ["rgba(252,209,58,1)", "rgba(252,209,58,0)"]);
  let stampsFieldBackgroundGradient = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "linear-gradient(0deg, rgba(252,209,58,1) 67%, rgba(0,0,0,0) 100%)",
      "linear-gradient(0deg, rgba(252,209,58,0) 67%, rgba(0,0,0,0) 100%)",
    ]
  );

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
          className="col-span-2 col-start-1 text-lg lg:text-xl lg:min-h-[350px] flex items-center"
          {...rest}>
          {children}
        </div>
        <Portal targetRef={stampsRef}>
          <motion.div style={{ x, rotateZ, position: "absolute" }}>{stampBody}</motion.div>
        </Portal>
      </>
    );
  };

  const introRef = useRef();

  return (
    <>
      <section id={id} className=" bg-yellow-base">
        <div id="ABOUT ME INTRO" ref={introRef} className="lg:flex gap-5 mx-auto max-w-screen-xl px-[32px] pt-24">
          <div className="md:w-[40%] lg:-mb-10">
            <Heading>Who am I?</Heading>
          </div>
        </div>
      </section>
      <section className="bg-yellow-base max-lg:pt-10">
        <div className="mx-auto max-w-screen-xl px-[32px] relative pb-10">
          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
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
                    <img src={`/emojis/${el.icon}`} alt="emoji" />
                  </StampTextIcon>
                }
                key={ind}>
                <p className="">
                  <el.body />
                </p>
              </AboutMeParagraph>
            ))}

            {windowWidth >= 1024 &&
              aboutme.map((el, ind) => (
                <div
                  key={ind}
                  className="col-span-1 col-start-3 row-span-6 bg-blue -mt-1 "
                  style={{ gridRowStart: ind + 1, gridRowEnd: aboutme.length + 1 }}>
                  <div key={ind} className="sticky top-0 flex justify-center pt-16">
                    <RotateOnScroll>
                      <StampTextIcon text={el.iconText} {...el.stampSettings} radious={settings.stampRadious}>
                        <img src={`/emojis/${el.icon}`} alt={`emoji ${el.icon}`} />
                      </StampTextIcon>
                    </RotateOnScroll>
                  </div>
                </div>
              ))}
          </div>

          <div className="max-lg:translate-y-[150px] max-lg:-mt-[100px] lg:my-20 bg-white border-4 border-black rounded-[20px] rounded-tl-[60px] rounded-br-[60px] min-h-[200px] min-w-[300px] flex flex-col md:flex-row items-center gap-5 p-[60px]">
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-start lg:items-center">
                <CVIcon size={36} />
                <h1 className="text-lg lg:text-2xl font-bold">My resume</h1>
              </div>
              <p className="text-base lg:text-xl md:pr-[20%]">
                You can find details about my education end work experiance in my resume. You can download it as a PDF
                file.
              </p>
            </div>
            <div className="md:px-10 w-full md:w-[50%] flex justify-start md:justify-center">
              <Button size="big" href="/Resume-Wojciech-Wieclawski.pdf">
                <span className="pl-3 flex items-center gap-2">
                  My resume <ArrowRight color="black" />
                </span>
              </Button>
            </div>
          </div>
        </div>
        {windowWidth < 1024 && (
          <motion.div
            ref={stampsRef}
            style={{ background: stampsFieldBackgroundGradient }}
            id="STAMPS REF"
            className="pointer-events-none p-5 sticky bottom-0 left-0 rigth-0 w-full flex flex-nowrap justify-center items-center overflow-x-hidden mt-[0vh] h-[200px]"></motion.div>
        )}
      </section>
    </>
  );
}
