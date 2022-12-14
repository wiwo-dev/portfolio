import UnderlineText from "components/ui/UnderlineText";
import { ArrowRight } from "components/Icons";
import Button from "components/ui/Button";

export default function WhatICanHelpYouWith2() {
  return (
    <section className=" bg-gray antialiased">
      <div className="mx-auto max-w-screen-xl px-[32px] py-20">
        <h1 className="text-2xl lg:text-3xl font-black tracking-tight text-white">
          <UnderlineText color="pink">What is this site?</UnderlineText>
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="text-white md:w-[60%] antialiased">
            <p className="text-lg lg:text-xl max-lg:pt-10 lg:pt-3">
              This is my portfolio website where I present some of my skills and programming projects that I’ve been
              working on recently. Contact me if you have a project that you need help with. Let’s see what I can do for
              you.
            </p>
            {/* <p className="text-lg lg:text-xl max-lg:pt-10 lg:pt-3">
              If you have a project in mind, please do not hesitate to contact me. Let's see what I can do for you.
            </p> */}
          </div>
          <div className="md:w-[40%] flex justify-start md:justify-center items-end max-md:pt-10 md:items-center">
            <Button href="/#contact">
              <span className="pl-2 flex justify-center items-center gap-2">
                Contact me
                <ArrowRight color="black" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
