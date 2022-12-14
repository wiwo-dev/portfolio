import Link from "next/link";
import React from "react";

export default function MyLink({ children, className, href, ...rest }) {
  return (
    <Link
      href={href}
      className={`underline hover:decoration-yellow-base transition-all duration-300 ${className} `}
      {...rest}>
      {children}
    </Link>
  );
}
