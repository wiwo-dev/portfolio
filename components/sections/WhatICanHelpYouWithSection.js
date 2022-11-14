import UnderlineText from "components/ui/UnderlineText";
import { ArrowRight } from "components/Icons";
import Button from "components/ui/Button";

export default function WhatICanHelpYouWith2() {
  return (
    <section className=" bg-gray antialiased">
      <div className="mx-auto max-w-screen-xl px-[32px] py-20">
        <h1 className="text-2xl lg:text-3xl font-black tracking-tight text-white">
          <UnderlineText color="pink">What I can help you with?</UnderlineText>
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="text-white md:w-[60%] antialiased">
            <p className="text-lg lg:text-xl max-lg:pt-10 lg:pt-3">
              I’m here to help you with any kind of web development. From landing pages or business sites to complex
              applications.
            </p>
            <p className="text-lg lg:text-xl max-lg:pt-10 lg:pt-3">
              If you have a project in mind, please do not hesitate to contact me. Let's see what I can do for you.
            </p>
          </div>
          <div className="md:w-[40%] flex justify-start md:justify-center items-end pt-10">
            <Button>
              Hire me
              <span className="pl-2 flex justify-center items-center">
                <ArrowRight color="black" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
