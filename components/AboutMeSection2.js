import Heading from "./ui/Heading";

export default function AboutMeSection2() {
  return (
    <section className="min-h-screen bg-yellow py-[100px]">
      <section className="mx-auto max-w-screen-2xl px-[32px]">
        <div className="md:flex gap-5">
          <div className="md:w-[40%]">
            <Heading>About me</Heading>
          </div>
          <div className="md:w-[60%]">
            <p className="text-3xl leading-relaxed">
              In my work, I strive to create thoughtful, user-centered experiences that adhere to web standards. I build
              websites and web applications using JavaScript, React and NextJS. In order to “make it pop” I use Framer
              Motion for animations.
            </p>
          </div>
        </div>
        <div className="md:flex gap-5 md:pl-[10vw] my-10 mx-auto">
          <div className="md:w-[60%] md:max-w-3xl flex flex-col gap-20">
            <AboutParagraph>
              I am a Computer Science Engineer and have a Masters's degree in Management in Virtual Environments. My
              education gave me a deep understanding of both the technical and business sides of digital projects.
            </AboutParagraph>
            <AboutParagraph>
              I am a good communicator with developed soft skills. I can talk with all project stakeholders in business
              and technical languages. I know the budgeting process, and I can set and track targets.
            </AboutParagraph>
            <AboutParagraph>
              Over the course of my career at Red Bull I have been managing a team of 8 people. I gained plenty of
              experience in all sorts of digital projects. My work has ranged from landing pages to complex systems and
              platforms. Starting on those with a modest budget where I coded some of the elements myself to the bigger
              ones in which I led the project with help from a variety of external agencies.
            </AboutParagraph>
            <AboutParagraph>
              My work has thought me the importance of high-quality branding. In my youth I also worked as a
              photographer, I learned Photoshop, Lightroom, and Illustrator which helped me quickly learn Figma which I
              use to design user interfaces.
            </AboutParagraph>
            <AboutParagraph>
              I’m also a certified kitesurfing, windsurfing, and skiing instructor. I’ve been teaching in many places
              around the globe. This experience influenced my ability to prepare presentations and present in front of
              people. Sharing knowledge in an understandable and easy-to-absorb manner is one of my skills.
            </AboutParagraph>
            <AboutParagraph>
              My spare time is filled with all kinds of sports. I’m currently working on improving my surfing and
              learning how to surf big waves.
            </AboutParagraph>
          </div>

          <div className="md:flex-1 pl-10 bg-[rgba(0,0,0,.2)] rounded-l-[80px] border-green-500">
            <AboutSide>Trust me, I'm an Engineer</AboutSide>
            <AboutSide>Developed soft skills</AboutSide>
            <AboutSide>Team and project management</AboutSide>
            <AboutSide>Design and graphics</AboutSide>
            <AboutSide>Knowladge sharing</AboutSide>
          </div>
        </div>
      </section>
    </section>
  );
}

function AboutParagraph({ children }) {
  return (
    <div className="min-h-[60vh] flex items-center">
      <p className="text-3xl leading-loose ">{children}</p>
    </div>
  );
}

function AboutSide({ children }) {
  return (
    <div className="min-h-[60vh] flex items-center sticky top-0">
      <div className=" my-[100px] border-[8px] border-r-0 border-black rounded-tl-[20px] rounded-bl-[80px] rounded-r-none bg-white w-full h-[100px] flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
