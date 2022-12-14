import React from "react";

export default function ArrowRight({ size = 16, color = "white" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block">
      <path
        d="M8.75 3.25L13.25 7.75L8.75 12.25M2.75 7.75H13.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
