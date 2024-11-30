import Heading from "components/ui/Heading";

export default function ProjectHeader({ title, subline, image, year }) {
  return (
    <div className="bg-yellow-base">
      <div className="pt-24 pb-12 mx-auto max-w-screen-xl px-[32px] flex flex-col items-center md:items-start gap-5">
        <div className="bg-white rounded-[30px] rounded-tl-[60px] rounded-br-[60px] p-[30px] w-fit">{image}</div>
        <Heading>{title}</Heading>
        <div className="flex flex-col gap-2">
          <p className="font-bold">{subline}</p>
          <p className="self-end md:self-start text-base font-semibold text-black/50">{year}</p>
        </div>
      </div>
    </div>
  );
}
