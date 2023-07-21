import UnderlineText from "components/ui/UnderlineText";

export default function IntroSection() {
  return (
    // <section className=" bg-yellow-base ">
    <section className=" bg-yellow-base ">
      <div className="mx-auto max-w-screen-xl px-[32px] py-24">
        <p className="text-lg lg:text-xl lg:w-[60%]">
          I build <UnderlineText color="white">Websites</UnderlineText>,{" "}
          <UnderlineText color="white">Web Applications</UnderlineText> and{" "}
          <UnderlineText color="white">Mobile Apps</UnderlineText>.
        </p>
        <p className="text-lg lg:text-xl lg:w-[60%]">
          My go-to technologies are <UnderlineText color="white">JavaScript</UnderlineText>,{" "}
          <UnderlineText color="white">TypeScript</UnderlineText>, <UnderlineText color="white">React</UnderlineText>,{" "}
          <UnderlineText color="white">React Native</UnderlineText> and{" "}
          <UnderlineText color="white"> NextJS</UnderlineText>. I’m always open to trying and learning new things.
        </p>
      </div>
    </section>
  );
}
