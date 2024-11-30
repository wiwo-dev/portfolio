import UnderlineText from "components/ui/UnderlineText";

export default function IntroSection() {
  return (
    // <section className=" bg-yellow-base ">
    <section className="bg-yellow-base relative ">
      <div className="absolute top-2 right-[64px] text-sm text-black">
        I wish I could still be as young as I am in this picture. 🫠
      </div>
      <div className="mx-auto max-w-screen-xl px-[32px] py-24">
        <p className="text-lg lg:text-xl lg:w-[60%]">
          I build <UnderlineText color="white">Websites</UnderlineText>,{" "}
          <UnderlineText color="white">Web Applications</UnderlineText> and{" "}
          <UnderlineText color="white">Mobile Apps</UnderlineText>.
        </p>
        <p className="text-lg lg:text-xl lg:w-[60%]">
          Using
          <UnderlineText color="white">TypeScript</UnderlineText>, <UnderlineText color="white">React</UnderlineText>,{" "}
          <UnderlineText color="white">React Native</UnderlineText>
          <UnderlineText color="white"> Next.js</UnderlineText> and many other cool tech. I’m always open to trying and
          learning new things.
        </p>
      </div>
    </section>
  );
}
