import React from "react";

export default function Button({ variant = "default" }) {
  const defaultClassName = "bg-yellow border-[6px] border-yellow";
  const lightClassName = "bg-white border-[6px] border-yellow";

  return (
    <button
      className={`${
        variant === "light" ? lightClassName : defaultClassName
      } rounded-[20px] px-[24px] py-[6px] font-bold uppercase`}>
      Button
    </button>
  );
}
