import UnderlineText from "components/ui/UnderlineText";

export default function IntroSection() {
  return (
    // <section className=" bg-yellow-base ">
    <section className=" bg-yellow-base ">
      <div className="mx-auto max-w-screen-xl px-[32px] py-24">
        <p className="text-lg lg:text-xl lg:w-[60%]">
          I build <UnderlineText color="white">Websites</UnderlineText> and{" "}
          <UnderlineText color="white">Web Applications</UnderlineText>. My go-to technologies are{" "}
          <UnderlineText color="white">JavaScript, React and NextJS</UnderlineText>, but I’m always open to trying and
          learning new things.
        </p>
      </div>
    </section>
  );
}
