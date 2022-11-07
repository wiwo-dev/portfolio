import React from "react";

function Heading({ children, className }) {
  const array = children.split(" ");
  return (
    <h1 className={`text-3xl lg:text-4xl font-sans font-black tracking-tight  ${className}`}>
      {array.map((el, ind) => (
        <span key={ind} className="inline-block shadow-[inset_0_-0.45em_0_0_#FFFFFF]">
          {el}
          {ind !== array.length - 1 && <>&nbsp;</>}
        </span>
      ))}
    </h1>
  );
}

export default Heading;
