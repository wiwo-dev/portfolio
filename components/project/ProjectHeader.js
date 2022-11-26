import Heading from "components/ui/Heading";

export default function ProjectHeader({ title, subline, image }) {
  return (
    <div className="bg-yellow-base">
      <div className="pt-24 pb-12 mx-auto max-w-screen-xl px-[32px] flex flex-col items-center md:items-start gap-5">
        <div className="bg-white rounded-[30px] rounded-tl-[60px] rounded-br-[60px] p-[30px] w-fit">{image}</div>
        <Heading>{title}</Heading>
        <p className="font-bold">Fully responsive game written in React.</p>
      </div>
    </div>
  );
}
