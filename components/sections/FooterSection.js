import { LinkedInIcon, MailIcon, InstagramIcon } from "components/Icons";

import Link from "next/link";
import React from "react";
import UnderlineText from "components/ui/UnderlineText";

const links = [
  { label: "About me", href: "/#aboutme" },
  { label: "My resume", href: "/cv" },
  { label: "My Projects", href: "/#projects" },
  { label: "The Process", href: "/#process" },
  { label: "Contact me", href: "/#contact" },
];

export default function FooterSection() {
  return (
    <section className=" bg-gray ">
      <div id="CONTACT ME" className="mx-auto max-w-screen-xl px-[32px] py-20 flex flex-col gap-5">
        <p className="text-white">
          <UnderlineText color="violet">Say hello</UnderlineText>
        </p>

        <span className="flex gap-3 items-center text-white">
          <MailIcon fill="white" size={16} /> wojtekwieclawski@gmail.com
        </span>
        <span className="flex gap-3 items-center text-white">
          <LinkedInIcon fill="white" size={16} /> Wojciech Więcławski
        </span>
        <span className="flex gap-3 items-center text-white">
          <InstagramIcon color="white" size={16} /> @wiwowiwo
        </span>
        <ul className="flex flex-col gap-3 md:flex-row max-w-screen-lg mx-auto justify-around">
          {links.map((link, ind) => (
            <li key={ind}>
              <FooterLink href={link.href}>{link.label}</FooterLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FooterLink({ href = "", children }) {
  const isAnchor = Array.from(href).filter((el) => el === "#").length > 0;

  return (
    <Link href={href} className="underline text-white uppercase" scroll={!isAnchor}>
      {children}
    </Link>
  );
}
