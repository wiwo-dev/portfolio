const { default: UnderlineText } = require("ui/UnderlineText");

export default function IntroSection() {
  return (
    <section className=" bg-yellow-base ">
      <div className="mx-auto max-w-screen-xl px-[32px] py-24">
        {/* <div className="h-[10px] w-[60%] bg-salmon"></div> */}
        <p className="text-lg lg:text-xl lg:w-[60%]">
          I build <UnderlineText color="white">Websites</UnderlineText> and{" "}
          <UnderlineText color="white">Web Applications</UnderlineText>. I focus on thoughtful, user-centred
          experiences. My go to technologies are{" "}
          <UnderlineText color="white">JavaScript, React and NextJS</UnderlineText> but I’m always open to trying and
          learning new things.
        </p>
      </div>
    </section>
  );
}
