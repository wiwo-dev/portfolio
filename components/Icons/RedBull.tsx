import Image from "next/image";
import { cn } from "../../utils/utils";

type Props = {
  className?: string;
  width?: number;
  height?: number;
};
export const RedBullCan = ({ className, width = 77.2, height = 200 }: Props) => {
  return (
    <div className={cn("", className)}>
      <Image src="/red-bull.png" width={width} height={height} alt="Red Bull can" className="object-contain" />
    </div>
  );
};
