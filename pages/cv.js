import React from "react";

import UnderlineText from "../components/ui/UnderlineText";

import { MailIcon, DownloadIcon, LinkedInIcon } from "../components/Icons";
import Link from "next/link";

const data = {
  coreTechnologies: [
    "JavaScript",
    "React",
    "CSS/SCSS",
    "Tailwind CSS",
    "NextJS",
    "Node.js",
    "Prisma",
    "Google Firestore",
    "Framer Motion",
  ],
  otherTechnologies: [
    "Responsive Web Design",
    "UX/UI Design",
    "Git / GutHub",
    "Adobe Photoshop, Illustrator",
    "Figma",
    "Video editing (Final Cut Pro X)",
    "Digital Marketing",
    "Google Analytics",
    "Social Media Management",
    "Content Creation & Storytelling",
  ],
  heading: {
    intro:
      "I’m a developer with 10 years of experience in the corporate world of Digital Marketing, Social Media, and Video Production. I am a Computer Science Engineer and have a Masters's degree in Management in Virtual Environments. My education and work experience give me a deep understanding of the technical and business sides of digital projects. ",
  },
  education: {
    intro: "",
    schools: [
      {
        school: "Poznań University of Technology",
        field: "Computer Science (Engineer)",
        time: "2012 - 2016",
        location: "Poznan, Poland",
      },
      {
        school: "Kozminski University",
        field: "Management in Virtual Enviroments (e-business) (Master's Degree)",
        time: "2016 - 2018",
        location: "Warsaw, Poland",
      },
    ],
  },
  experience: {
    intro:
      "I’m a developer with 10 years of experience in the corporate world of Digital Marketing, Social Media, and Video Production. I’m a creative mind with plenty of experience in the digital world. In my work, I strive to create thoughtful, user-centred experiences that adhere to web standards. I build websites and web applications using JavaScript, React and NextJS. In order to “make it pop” I use Framer Motion for animations. ",
    jobs: [
      {
        company: "Freelance",
        position: "Web Developer, Social Media Strategist",
        time: "Aug 2022 - Present",
        description: {
          intro:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi accusantium voluptas saepe facere hic",
          bulletpoints: [
            "Building web pages and web applications using React and Webflow",
            "Developing social media strategy, creative content ideas, and conducting workshops and trainings.",
          ],
        },
      },
      {
        company: "Red Bull",
        position: "Social Media Manager",
        time: "Jan 2019 - Apr 2022",
        location: "Warsaw, Poland",
        description: {
          intro:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi accusantium voluptas saepe facere hic",
          bulletpoints: [
            "Managing a team responsible for over 20 social media profiles (Facebook, Instagram, YouTube, TikTok, Discord)",
            "Content creation and curation across all channels and ensuring a cohesive online brand identity.",
            "Tracking and analyzing data to ensure a high engagement rate and driving users to owned channels.",
            "Planning and executing paid advertising. Preparing media plans, campaign optimization, and ongoing control of expenses. Depending on the campaign: from working with a media agency to working independently in Facebook’s advertising system.",
            "Defining and developing social content creators and opinion leaders programs. Identifying and hiring new creators. Building long-term relationships.",
            "Digital projects management. Building and developing websites, platforms and digital experiences on redbull.com",
          ],
          projects: [
            "Red Bull Enduro Liga - A platform that let us move Enduro-Motocross competitions to virtual world during the pandemic. Riders were uploading their video submitions throughtout 6 weeks period. Each entry was checked and assesed by the admins. Platform was connected to Discord server.",
          ],
        },
      },
      {
        company: "Red Bull",
        position: "Digital Specialist",
        time: "Jun 2016 - Jan 2019",
        location: "Warsaw, Poland",
        description: {
          intro:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi accusantium voluptas saepe facere hic",
          bulletpoints: [
            "Concept development and supervision of website creation for Red Bull projects.",
            "Developing, creating and implementing a communication plan in owned and managed media channels.",
            "Creating video content for social media and www. Depending on the project: cooperation with production teams or independent recording and editing.",
            "Support and implementation of tools extending the capabilities of redbull.com",
          ],
          projects: [
            "Red Bull Wjazd na Bramkę - Online platform for esport tournament in Rocket League. Team pairing, bracket generation, results submition and live result view during final stage of the project.",
            "Digital Activation for Red Bull Tour Bus music project. Users were asked to translate song lyrics to emojis and submit their creative work to the contest. App was generating graphics that were easilly shareble in social medias.",
          ],
        },
      },
      {
        company: "Red Bull",
        position: "Digital Marketing Trainee",
        time: "Sep 2015 - Jun 2016",
        location: "Warsaw, Poland",
        description: {
          intro:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi accusantium voluptas saepe facere hic",
          bulletpoints: [
            "Preparation of content plans and ideas for activations for managed and owned channels.",
            "Managing social media accounts. Ongoing community management, replying to messages and comments, creating reports and analysis.",
            "Creating and supervising contests conducted on social media and on redbull.com.",
            "Cooperation with other company departments, interactive agencies and external partners in digital activities related to the creation of event pages and other digital activations of Red Bull.",
          ],
        },
      },
      {
        company: "Red Bull",
        position: "Student Brand Manager",
        time: "Apr 2012 - Jun 2015",
        location: "Poznan, Poland",
        description: {
          intro:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi accusantium voluptas saepe facere hic",
          bulletpoints: [
            "Brand ambassador working at Poznań University of Technology.",
            "Cooperation with student organizations in the city and supporting their initiatives.",
            "Organizing events for students.",
            "Maintaining good relations with local media (radio stations, TVs, newspapers).",
          ],
        },
      },
      {
        company: "Kitesurfing, Windsurfing and Skiing Instructor",
        position: "",
        location: "Poland, Greece, Brazil, Austria, France, Italy and more...",
        time: "2010 - Sep 2015",
        description: {
          intro:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi accusantium voluptas saepe facere hic",
          bulletpoints: ["Group and individual lessons, mainly for adults. Teaching in Polish and English."],
        },
      },
    ],
  },
};

export default function cv() {
  return (
    <main className="bg-yellow-base xs:p-3 md:p-7 min-h-screen">
      <div className="border-2 border-black min-h-[50vh] bg-white  p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto">
        <aside className="flex justify-end items-center gap-3 mb-6">
          <a
            className="text-sm"
            href="https://www.linkedin.com/in/wojciech-wieclawski/"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="mailto:wojtekwieclawski@gmail.com?subject=Hello!">
            <MailIcon />
          </a>
          <a className="flex items-center" href="/Resume-Wojciech-Wieclawski.pdf">
            <DownloadIcon /> <span className="ml-1 text-sm">Download PDF</span>
          </a>
        </aside>
        <div className="md:flex md:gap-5">
          <div className="flex gap-5 md:flex-col w-full md:w-1/3 ">
            <ul className="hidden md:block">
              <li className="">
                <UnderlineText color="yellow-base">
                  <a className="cursor-pointer" href="mailto:wojtekwieclawski@gmail.com?subject=Hello!">
                    wojtekwieclawski@gmail.com
                  </a>
                </UnderlineText>
              </li>
              <li className="hover:cursor-pointer">
                <Link href="https://wiwoproduction.com">wiwoproduction.com</Link>
              </li>
            </ul>

            <div className="w-[35%] md:w-auto">
              <h1 className="text-black text-base lg:text-lg font-bold">Core Technologies</h1>
              <ul className="md:list-disc md:pl-7">
                {data.coreTechnologies.map((el, ind) => (
                  <li key={ind} className="inline md:list-item">
                    {el}
                    {ind < data.coreTechnologies.length - 1 && <span className="md:hidden">,&nbsp;&#8203;</span>}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[65%] md:w-auto">
              <h1 className="text-black text-base lg:text-lg font-bold">Other skills</h1>
              <ul className="md:list-disc md:pl-7">
                {data.otherTechnologies.map((el, ind) => (
                  <li key={ind} className="inline md:list-item">
                    {el}
                    {ind < data.otherTechnologies.length - 1 && <span className="md:hidden">,&nbsp;&#8203;</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:w-2/3 mt-8 md:mt-0">
            <div className="flex flex-col gap-5">
              <CVTitle>Wojciech Więcławski</CVTitle>
              <p className="text-xl">Web Developer with corporate experience</p>
              <p className="md:pr-[20%] pb-5">{data.heading.intro}</p>
            </div>
            <hr className="w-2/3"></hr>
            <div className="flex flex-col gap-5 py-4 lg:pr-16">
              <span>
                <CVHeadingUnderline>Education</CVHeadingUnderline>
              </span>
              {data.education.schools.map((el, ind) => (
                <CVPosition
                  key={ind}
                  variant="two-lines"
                  headline={el.school}
                  subheadline={`${el.field}`}
                  time={el.time}
                  location={el.location}
                />
              ))}
            </div>
            <div className="flex flex-col gap-5 py-4 mt-1 lg:pr-16">
              <span>
                <CVHeadingUnderline>Experience</CVHeadingUnderline>
              </span>
              {data.experience.jobs.map((job, ind) => (
                <CVPosition
                  key={ind}
                  headline={job.company}
                  subheadline={` - ${job.position}`}
                  time={job.time}
                  location={job.location}>
                  <>
                    <ul className="list-disc pl-5">
                      {job.description.bulletpoints.map((bullet, ind) => (
                        <li key={ind}>{bullet}</li>
                      ))}
                    </ul>

                    {job.description.projects && (
                      <div className="mt-2">
                        <h2 className="font-bold">Interesting projects</h2>
                        <ul className="list-disc pl-5">
                          {job.description.projects?.map((project, ind) => (
                            <li key={ind}>{project}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                </CVPosition>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function CVHeading({ variant = "h1", className, children }) {
  const underlineH1 = "inline-block shadow-[inset_0_-0.45em_0_0_#FCD13A]";
  if (variant === "h2") {
    return <h2 className={`text-black text-lg lg:text-xl font-bold ${className}`}>{children}</h2>;
  } else {
    return <h1 className={`text-black text-lg lg:text-xl font-bold ${underlineH1} ${className}`}>{children}</h1>;
  }
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

function CVTitle({ children }) {
  return <h1 className="text-3xl lg:text-4xl text-black font-extrabold">{children}</h1>;
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
