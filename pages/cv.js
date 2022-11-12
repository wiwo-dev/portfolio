import React from "react";

import UnderlineText from "../components/ui/UnderlineText";

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
      "I’m a developer with 10 years of experience in the corporate world of Digital Marketing, Social Media, and Video Production. I am a Computer Science Engineer and have a Masters's degree in Management in Virtual Environments. My education and work experiance give me a deep understanding of the technical and business sides of digital projects. ",
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
            "Red Bull Enduro Liga - A platform that let us move Enduro-Motocross competitions to virtual world during the pandemic. Riders were uploading their video submitions throughtout 6 weeks period. Each entry was checked and judged by the admins. Platform was connected to Discord server.",
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
            "Concept development and supervision of website creation for Red Bull projects.",
            "Developing, creating and implementing a communication plan in owned and managed media channels.",
            "Creating video content for social media and www. Depending on the project: cooperation with production teams or independent recording and editing.",
            "Support and implementation of tools extending the capabilities of redbull.com",
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
            "Brand ambasador working at Poznań University of Technology.",
            "Cooperation with student organizations in the city and supporting their initiatives.",
            "Organizing events for students.",
            "Maintaining good relations with local medias (radio stations, tvs, newspapers).",
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
              <li className="hover:cursor-pointer">wiwoproduction.com</li>
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
              <p className="text-xl">Web Developer with corporate experiance</p>
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

function LinkedInIcon({ height = 16, width = 16, fill = "black" }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DownloadIcon({ height = 16, width = 16, fill = "black" }) {
  return (
    <svg height={height} fill={fill} viewBox="8 8.003 48 47.997" width={width} xmlns="http://www.w3.org/2000/svg">
      <path d="M29.283 12.19a19.624 19.624 0 015.434 0 2 2 0 00.567-3.959 23.75 23.75 0 00-6.566 0 2 2 0 00.565 3.959z" />
      <path d="M42.91 10.619a2 2 0 00-1.82 3.561C47.819 17.621 52 24.449 52 32c0 11.028-8.972 20-20 20s-20-8.972-20-20c0-7.551 4.181-14.379 10.911-17.819a2 2 0 00-1.821-3.561C13.016 14.747 8 22.939 8 32c0 13.233 10.766 24 24 24 13.233 0 24-10.767 24-24 0-9.061-5.016-17.253-13.09-21.381z" />
      <path d="M22.586 36.586a2 2 0 000 2.828l8 8c.39.391.902.586 1.414.586s1.023-.195 1.414-.586l8-8a2 2 0 10-2.828-2.828L34 41.172V18a2 2 0 00-4 0v23.172l-4.586-4.586a2 2 0 00-2.828 0z" />
    </svg>
  );
}

function MailIcon({ height = 16, width = 16, fill = "black" }) {
  return (
    <svg
      height={height}
      viewBox="0 59.882 479.058 359.294"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}>
      <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 015.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
    </svg>
  );
}
