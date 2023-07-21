import React from "react";

import UnderlineText from "../components/ui/UnderlineText";

import { MailIcon, DownloadIcon, LinkedInIcon, GithubIcon } from "../components/Icons";
import Link from "next/link";
import WebIcon from "components/Icons/WebIcon";

const data = {
  coreTechnologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "NextJS",
    "Node.js",
    "Tailwind CSS",
    "Framer Motion",
    "Prisma",
    "Google Firestore",
  ],
  otherDigitalSkils: [
    "UX/UI Design",
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Video Editing (Final Cut Pro X)",
    "Digital Marketing",
    "Google Analytics",
    "Social Media Management",
    "Data Analysis",
  ],
  heading: {
    intro:
      "I’m a developer with many years of experience in the corporate world of Digital Marketing. I am a Computer Science Engineer. My education and work experience let me communicate in both technical and business languages. Besides coding in various technologies I also design user interfaces.",
  },
  education: {
    intro: "",
    schools: [
      {
        school: "Poznań University of Technology",
        field: "Computer Science",
        level: "Bachelor of Engeneering",
        time: "2012 - 2016",
        location: "Poznan, Poland",
      },
      {
        school: "Kozminski University",
        field: "Management in Virtual Enviroment",
        level: "Masters",
        time: "2016 - 2018",
        location: "Warsaw, Poland",
      },
    ],
  },
};

export default function cv() {
  return (
    <main className="bg-yellow-base xs:p-3 md:p-7 min-h-screen">
      <div className="border-2 border-black min-h-[50vh] bg-white p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto">
        <aside className="flex justify-end items-center gap-3 mb-6">
          <a className="text-sm md:hidden" href="https://github.com/wiwo-dev" target="_blank" rel="noopener noreferrer">
            <GithubIcon width={18} height={18} />
          </a>
          <a
            className="text-sm md:hidden"
            href="https://www.linkedin.com/in/wojciech-wieclawski/"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="mailto:wojtekwieclawski@gmail.com?subject=Hello!" className="md:hidden">
            <MailIcon />
          </a>
          <a className="flex items-center " href="/Resume-Wojciech-Wieclawski.pdf">
            <DownloadIcon /> <span className="ml-1 text-sm">Download PDF</span>
          </a>
        </aside>
        <div className="md:flex md:gap-5">
          <div className="flex gap-10 md:flex-col w-full md:w-1/3 ">
            <div className="hidden md:block">
              <CVHeadingUnderline>
                <Link href="https://wiwo.dev">wiwo.dev</Link>
              </CVHeadingUnderline>
            </div>
            <ul className="hidden md:block w-[80%]">
              <li className="flex items-end gap-3">
                <span className="min-w-[20px] flex justify-center">
                  <MailIcon />
                </span>
                <a className="underline" href="mailto:wojtekwieclawski@gmail.com?subject=Hello!">
                  wojtekwieclawski@gmail.com
                </a>
              </li>
              <li className="flex items-end gap-3">
                <span className="min-w-[20px] flex justify-center">
                  <WebIcon />
                </span>
                <span className="underline">
                  <Link href="https://wiwo.dev">https://wiwo.dev</Link>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="min-w-[20px] flex justify-center">
                  <GithubIcon />
                </span>
                <span className="underline">
                  <Link href="https://github.com/wiwo-dev">https://github.com/wiwo-dev</Link>
                </span>
              </li>
              <li className="flex items-center gap-3 leading-5 unde">
                <span className="min-w-[20px] flex justify-center">
                  <LinkedInIcon width={14} />
                </span>
                <span className="underline">
                  <Link href="https://www.linkedin.com/in/wojciech-wieclawski/">
                    https://www.linkedin.com/in/wojciech-wieclawski/
                  </Link>
                </span>
              </li>
            </ul>

            <div className="w-[35%] md:w-auto">
              <h1 className="text-black text-base lg:text-lg font-bold">
                <CVHeadingUnderline>Core Technologies</CVHeadingUnderline>
              </h1>
              <ul className="md:list-disc md:pl-7">
                {data.coreTechnologies.map((el, ind) => (
                  <li key={ind} className="inline md:list-item">
                    {el}
                    {ind < data.coreTechnologies.length - 1 && <span className="md:hidden">,&nbsp;&#8203;</span>}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden w-[80%]">
              <h1 className="text-black text-base lg:text-lg font-bold">
                <CVHeadingUnderline>Education</CVHeadingUnderline>
              </h1>
              {data.education.schools.map((el, ind) => (
                <div key={ind}>
                  <p className="font-bold">{el.school}</p>
                  <p className="font-bold">{el.field}</p>
                  <p className="">({el.level})</p>
                  <div className="flex justify-between items-center gap-2">
                    <div className="w-full h-[2px] bg-[#D9D9D9]"></div>
                    <p className="text-right whitespace-nowrap	">
                      {el.time}, {el.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[65%] md:w-auto">
              <h1 className="text-black text-base lg:text-lg font-bold">
                <CVHeadingUnderline>Other Digital Skills</CVHeadingUnderline>
              </h1>
              <ul className="md:list-disc md:pl-7">
                {data.otherDigitalSkils.map((el, ind) => (
                  <li key={ind} className="inline md:list-item">
                    {el}
                    {ind < data.otherDigitalSkils.length - 1 && <span className="md:hidden">,&nbsp;&#8203;</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:w-2/3 mt-8 md:mt-0">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl lg:text-4xl text-black font-extrabold">Wojciech Więcławski</h1>
              <p className="text-xl">Web Developer with digital marketing experience</p>
              <p className="md:pr-[20%] pb-5">{data.heading.intro}</p>
            </div>
            <hr className="w-2/3"></hr>
            <div className="flex flex-col gap-5 py-4 lg:pr-16">
              <span>
                <CVHeadingUnderline>Education</CVHeadingUnderline>
              </span>
              {data.education.schools.map((el, ind) => (
                <div key={ind}>
                  <div className="flex flex-col md:flex-row justify-between md:gap-10">
                    <div className="text-lg">
                      <p className="font-bold">{el.school}</p>
                      <p>{`${el.field} (${el.level})`}</p>
                    </div>
                    <p className="flex-none text-sm lg:text-base">{el.time}</p>
                  </div>
                  <div className="text-base opacity-60">{el.location}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5 py-4 mt-1 lg:pr-16">
              <CVHeadingUnderline>Experience</CVHeadingUnderline>
              <div>
                <div className="flex flex-col md:flex-row justify-between md:gap-10">
                  <p className="text-lg font-bold">Freelance Web Developer</p>
                  <p className="flex-none text-sm lg:text-base">2020-present</p>
                </div>
                <div>
                  <p className="pt-1 md:pr-16">
                    Building web pages and web applications with HTML, CSS, JavaScript, React, Next.js, and sometimes
                    WordPress or Webflow if needed. Designing user interfaces in Figma.
                  </p>
                  <p className="pt-1 md:pr-16">Some personal projects I have been working on:</p>
                  <ul className="list-disc pl-5">
                    <li className="list-item">Full stack eCommerce Platform (Next.js, Prisma, Next Auth), </li>
                    <li className="list-item">Responsive Snake Game (React, Firestore), </li>
                    <li className="list-item">Sorting Algorithms Visualiser (React, Framer Motion, ChakraUI)</li>
                  </ul>
                  <p className="pt-1 md:pr-16 pl-5">
                    Description and source code is available at my portfolio website (Next.js, GraphQL, Contentful,
                    Framer Motion){" "}
                    <span className="underline">
                      <Link href="https://wiwo.dev">https://wiwo.dev</Link>
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-col md:flex-row justify-between md:gap-10">
                  <p className="text-lg font-bold">IT, Digital Marketing and Social Media Consultant</p>
                  <p className="flex-none text-sm lg:text-base">2022-present</p>
                </div>
                <div>
                  <p className="pt-1 md:pr-16">
                    Developing strategies and creative communication ideas. Conducting workshops and trainings.
                    Information technology consulting.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-col md:flex-row justify-between md:gap-10">
                  <p className="text-lg font-bold">Red Bull</p>
                </div>
                <div className="flex">
                  <div className="w-[2px] bg-[#D9D9D9] mx-2 my-2"></div>
                  <div className="w-full">
                    <div className="flex flex-row justify-between md:gap-10 items-center">
                      <p className="text-lg font-bold">Social Media Manager</p>
                      <p className="flex-none text-sm lg:text-base">2019-2022</p>
                    </div>
                    <div className="flex flex-row justify-between md:gap-10 items-center">
                      <p className="text-lg font-bold">Digital Specialist</p>
                      <p className="flex-none text-sm lg:text-base">2016-2019</p>
                    </div>
                    <div className="flex flex-row justify-between md:gap-10 items-center">
                      <p className="text-lg font-bold">Digital Marketing Trainee</p>
                      <p className="flex-none text-sm lg:text-base">2015-2016</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="pt-1 md:pr-16">
                    Digital projects management. Building and developing websites, platforms, and digital experiences on
                    redbull.com. Concept development and supervision. Coding. Cooperation with other company
                    departments, interactive agencies and external partners in Red Bull’s digital activities.
                  </p>
                  <p className="pt-1 md:pr-16">I managed development of many interesting platforms e.g.</p>
                  <ul className="list-disc pl-5">
                    <li className="list-item">
                      Red Bull Enduro Liga - moving sport competitions to the virtual world during the pandemic. Web App
                      for riders to upload their video submissions. Each entry was checked and assessed by the admins.
                      Platform was connected to Discord server.{" "}
                    </li>
                    <li className="list-item">
                      Red Bull Wjazd na Bramke - esport tournament in Rocket League. App for team pairing, bracket
                      generation, results submission and live result view.
                    </li>
                  </ul>
                  <p className="pt-1 md:pr-16">
                    Managing a team of independent contractors and full-time employees responsible for over 20 social
                    media profiles. Tracking and analysing users’ traffic data. Planning and executing paid advertising.
                    Preparing media plans, campaign optimisation, and ongoing control of expenses. Defining and
                    developing social content creators and opinion leaders programs. Producing video content for social
                    media and www.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-col md:flex-row justify-between md:gap-10">
                  <p className="text-lg font-bold">Kitesurfing, Windsurfing and Skiing Instructor</p>
                  <p className="flex-none text-sm lg:text-base">2010-2015</p>
                </div>
                <div>
                  <p className="pt-1 md:pr-16">
                    I’m certified kitesurfing, windsurfing, and skiing instructor. This experience influenced my ability
                    to prepare presentations and present in front of people. Sharing knowledge in an understandable and
                    easy-to-absorb manner is one of my skills.
                  </p>
                </div>
              </div>
              {/* <CVHeadingUnderline>Courses</CVHeadingUnderline>
              <p className="md:pr-16">
                In addition to Computer Science studies, I have completed many programming courses to develop my skills
                in modern web technologies. Some of these are The Web Developer Bootcamp (Colt Steel, Udemy), The Modern
                React Bootcamp (Colt Steel, Udemy), The Modern Javascript Bootcamp (Colt Steele, Stephen Grider, Udemy).
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function CVHeadingUnderline({ children }) {
  return (
    <span>
      <h1 className="inline-block relative text-lg lg:text-xl font-bold ">
        <UnderlineText color="yellow-base">{children}</UnderlineText>
      </h1>
    </span>
  );
}

function CVPosition({ headline, subheadline, time, variant = "one-line", location = "", body, children }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:gap-10">
        <p className={`text-lg ${variant === "two-lines" && "flex flex-col"}`}>
          <span className="font-bold">{headline}</span>
          <span>{subheadline}</span>
        </p>
        <p className="flex-none text-sm lg:text-base">{time}</p>
      </div>
      {location && <div className="text-base opacity-60">{location}</div>}
      <div className="pt-1 md:pr-16">{children}</div>
    </div>
  );
}
