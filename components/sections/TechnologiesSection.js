import React from "react";
import Heading from "components/ui/Heading";

export default function TechnologiesSection() {
  return (
    <section
      className=" py-[64px]"
      style={{ background: "radial-gradient(129.91% 265.52% at 45.04% 24.78%, #535BF5 24.31%, #FCD13A 100%)" }}>
      <div className="max-w-screen-2xl mx-auto px-[32px]">
        <div className="">
          <Heading color="gray" className="text-white antialiased">
            Technologies
          </Heading>
        </div>
        <div className="text-white antialiased pt-10">
          <p className="text-lg lg:text-xl">
            My favourite UI library is React. For more complex projects I like to use Next.js. As for styling, I know
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
