import React from "react";
import Heading from "./ui/Heading";

export default function TechnologiesSection() {
  return (
    <section className="min-h-screen bg-violet-light py-[64px]">
      <div className="max-w-screen-2xl mx-auto px-[32px] grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[20px]">
        <div className=" col-span-4 md:col-span-8 lg:col-span-12">
          <Heading>Technologies</Heading>
        </div>

        <div className=" col-span-4 md:col-span-6 lg:col-span-7">
          <p className="leading-relaxed text-xl lg:text-2xl">
            My favourite UI library is React. For more complex projects I like to use NextJS. As for styling, I know
            CSS/SCSS and BEM naming convention, but generally prefer Tailwind CSS which makes writing reusable
            components easier and faster. I’m also familiar with Node.js and Express. When there is a need to work with
            a database I like to use Prisma or Google’s Firestore. For less technical visitors: the above means I know
            HTML, CSS, and JavaScript. All of the technologies mentioned above are libraries/frameworks that use
            JavaScript. My usual work process starts in Figma (UI design software) which lets me build low and
            high-fidelity mockups in plenty of versions and make design decisions before coding. Knowing UI/UX design
            tools and processes helps me communicate better with the designers.
          </p>
        </div>
      </div>
    </section>
  );
}
