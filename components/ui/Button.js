import Link from "next/link";
import React from "react";
import { motion, transform } from "framer-motion";

export default function Button({
  variant = "default",
  size = "base",
  children,
  href = "",
  target = "",
  loading,
  ...rest
}) {
  const defaultClassName =
    "bg-yellow-base hover:bg-yellow-dark active:bg-yellow-darker  border-[6px] border-yellow-base hover:border-yellow-dark active:border-yellow-darker";
  const lightClassName =
    "bg-white border-[6px] border-yellow-base hover:border-yellow-dark active:border-yellow-darker";
  const hoverAnimationClassName = "transition transform hover:-translate-y-1 hover:drop-shadow-bottom";

  const MyButton = () => {
    return (
      <button
        className={`${variant === "light" ? lightClassName : defaultClassName} ${
          size === "big" ? "min-h-[60px] text-lg" : "min-h-[40px] text-base"
        }
      overflow-x-hidden rounded-[20px] px-[24px] py-[6px] font-bold uppercase whitespace-nowrap flex justify-center items-center ${hoverAnimationClassName}`}
        {...rest}>
        <motion.span animate={{ x: loading && [-200, 0, 200] }} transition={{ repeat: Infinity }}>
          {children}
        </motion.span>
      </button>
    );
  };

  if (href) {
    const isAnchor = Array.from(href).filter((el) => el === "#").length > 0;
    return (
      <Link href={href} scroll={!isAnchor} target={target}>
        <MyButton />
      </Link>
    );
  }

  return <MyButton />;
}
