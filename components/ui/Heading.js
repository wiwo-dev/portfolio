import React from "react";

function Heading({ children, className }) {
  return (
    <h1
      className={`text-5xl font-sans font-black tracking-tight inline-block shadow-[inset_0_-0.45em_0_0_#FFFFFF] ${className}`}>
      {children}
    </h1>
  );
}

export default Heading;
