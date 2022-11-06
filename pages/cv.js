import React from "react";

const data = {
  coreTechnologies: [
    "JavaScript",
    "React",
    "CSS",
    "SCSS",
    "Tailwind CSS",
    "NextJS",
    "Node.js",
    "Prisma",
    "Google Firestore",
    "Framer Motion",
  ],
  otherTechnologies: [
    "Responsive Web Design",
    "UX",
    "Figma",
    "Git",
    "GutHub",
    "UX Design/Strategy",
    "Digital Marketing",
    "Google Analytics",
  ],
  experience: {
    intro:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi accusantium voluptas saepe facere hic, repudiandae pariatur inventore non dolore neque earum optio veniam, mollitia doloribus itaque rerum a! Earum. ",
    jobs: [
      {
        company: "Red Bull",
        position: "Social Media Manager",
        time: "2019-2022",
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
        },
      },
      {
        company: "Red Bull",
        position: "Digital Specialist",
        time: "Jan 2016 - Jan 2019",
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
    ],
  },
};

export default function cv() {
  return (
    <main className="bg-yellow xs:p-3 md:p-7 min-h-screen">
      <div className="border-2 border-black min-h-[50vh] bg-white md:flex p-2 sm:p-6 max-w-7xl mx-auto">
        <div className="flex md:flex-col w-full md:w-1/3 ">
          <div>
            <CVHeading variant="h2">Core Technologies</CVHeading>
            <ul className="md:list-disc md:pl-7">
              {data.coreTechnologies.map((el, ind) => (
                <li key={ind} className="inline-block md:list-item">
                  {el}
                  <span className="md:hidden">,&nbsp;</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <CVHeading variant="h2">Other Technologies</CVHeading>
            <ul className="md:list-disc md:pl-7">
              {data.otherTechnologies.map((el, ind) => (
                <li key={ind} className="inline-block md:list-item">
                  {el}
                  <span className="md:hidden">,&nbsp;</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:w-2/3 ">
          <div className="flex flex-col gap-5 py-4">
            <CVTitle>Wojciech Więcławski</CVTitle>
            <p className="text-2xl">Web Developer with corporate experiance</p>
            <p className="md:pr-[30%]">
              I strive to create thoughtful, user-centered experiences that adhere to web standards. I build websites
              and web applications using JavaScript, React and NextJS. In order to “make it pop” I use Framer Motion for
              animations.
            </p>
          </div>
          <hr></hr>
          <div className="flex flex-col gap-5 py-4 lg:pr-16">
            <span>
              <CVHeadingUnderline>Education</CVHeadingUnderline>
            </span>
            <CVPosition
              headline="Poznań University of Technology"
              subheadline=" - Computer Science (Engineer)"
              time="2012-2016"
            />
            <CVPosition
              headline={"Kozminski University"}
              subheadline=" - Management in Virtual Environments (e-business) (Master's Degree)"
              time="2016-2018"
            />
          </div>
          <div className="flex flex-col gap-5 py-4 mt-8 lg:pr-16">
            <span>
              <CVHeadingUnderline>Experience</CVHeadingUnderline>
            </span>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi accusantium voluptas saepe facere
              hic, repudiandae pariatur inventore non dolore neque earum optio veniam, mollitia doloribus itaque rerum
              a! Earum.
            </p>
            {data.experience.jobs.map((job, ind) => (
              <CVPosition key={ind} headline={job.company} subheadline={` - ${job.position}`} time={job.time}>
                <ul className="list-disc pl-5">
                  {job.description.bulletpoints.map((bullet, ind) => (
                    <li key={ind}>{bullet}</li>
                  ))}
                </ul>
              </CVPosition>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function CVHeading({ variant = "h1", className, children }) {
  const underlineH1 = "inline-block shadow-[inset_0_-0.45em_0_0_#FCD13A]";
  if (variant === "h2") {
    return <h2 className={`text-black text-2xl font-bold ${className}`}>{children}</h2>;
  } else {
    return <h1 className={`text-black text-2xl font-bold ${underlineH1} ${className}`}>{children}</h1>;
  }
}

function CVHeadingUnderline({ children }) {
  return (
    <span>
      <h1 className="inline-block relative text-2xl font-bold before:absolute before:bottom-0 before:left-0 before:w-full before:h-[12px] before:bg-yellow z-0 before:-z-10">
        {children}
      </h1>
    </span>
  );
}

function CVTitle({ children }) {
  return <h1 className="text-5xl text-violet font-bold">{children}</h1>;
}

function CVPosition({ headline, subheadline, time, body, children }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:gap-10">
        <p className="text-xl">
          <span className="font-bold">{headline}</span>
          <span>{subheadline}</span>
        </p>
        <p className="flex-none text-sm">{time}</p>
      </div>
      <div className="pt-3 md:pr-16">{children}</div>
    </div>
  );
}
