import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import UnderlineText from "components/ui/UnderlineText";
import { CloseIcon } from "components/Icons";

import { links } from "data/menu";

export default function MobileMenu({ onClose }) {
  function MenuLink({ href, children }) {
    const isAnchor = Array.from(href).filter((el) => el === "#").length > 0;
    return (
      <Link href={href} className=" text-white text-xl" onClick={onClose} scroll={!isAnchor}>
        <UnderlineText color="violet">{children}</UnderlineText>
      </Link>
    );
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 h-screen w-screen z-50 bg-gray"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{
        type: "tween",
        ease: "easeInOut",
      }}>
      <div className="flex justify-end p-5 absolute top-0 right-0">
        <a onClick={onClose}>
          <CloseIcon />
        </a>
      </div>
      <div className="flex flex-col justify-around h-full p-24 items-center">
        {links.map((link, ind) => (
          <MenuLink key={ind} href={link.href}>
            {link.label}
          </MenuLink>
        ))}
      </div>
    </motion.nav>
  );
}
