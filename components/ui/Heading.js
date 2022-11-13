import React from "react";
import UnderlineText from "./UnderlineText";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
const twFullConfig = resolveConfig(tailwindConfig);

function Heading({ children, className, color = "white" }) {
  const array = children.split(" ");
  let boxShadow;
  if (color[0] === "#") boxShadow = `inset 0 -0.45em ${color}`;
  else boxShadow = `inset 0 -0.45em ${twFullConfig.theme.colors[color]}`;
  return (
    <h1 className={`text-2xl lg:text-3xl font-black tracking-tight  ${className}`}>
      {array.map((el, ind) => (
        <span key={ind} style={{ boxShadow }} className="inline-block">
          {el}
          {ind !== array.length - 1 && <>&nbsp;</>}
        </span>
      ))}
    </h1>
  );
}

export default Heading;
