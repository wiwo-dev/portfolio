import { LinkedInIcon, MailIcon, InstagramIcon } from "components/Icons";

import Link from "next/link";
import React from "react";
import UnderlineText from "components/ui/UnderlineText";
import { MyLink } from "components/ui";

import { links } from "data/menu";

export default function FooterSection() {
  return (
    <section className=" bg-gray ">
      <div id="CONTACT ME" className="mx-auto max-w-screen-xl px-[32px] py-20 flex flex-col gap-5">
        <p className="text-white">
          <UnderlineText color="violet">Say hello</UnderlineText>
        </p>
        <MyLink href="mailto:wojtekwieclawski@gmail.com?subject=Hello!" className="text-white">
          <span className="flex gap-3 items-center ">
            <MailIcon fill="white" size={16} /> wojtekwieclawski@gmail.com
          </span>
        </MyLink>
        <MyLink href="https://www.linkedin.com/in/wojciech-wieclawski/" className="text-white">
          <span className="flex gap-3 items-center ">
            <LinkedInIcon fill="white" size={16} /> Wojciech Więcławski
          </span>
        </MyLink>
        <MyLink href="https://www.instagram.com/wiwowiwo/" className="text-white">
          <span className="flex gap-3 items-center">
            <InstagramIcon color="white" size={16} /> @wiwowiwo
          </span>
        </MyLink>
        <hr className="text-white opacity-70 mt-8"></hr>
        <ul className="flex flex-col gap-3 md:gap-12 md:flex-row max-w-screen-lg md:mx-auto justify-around">
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
    <MyLink href={href} className="text-white" scroll={!isAnchor}>
      {children}
    </MyLink>
  );
}
