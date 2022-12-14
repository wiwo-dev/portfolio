import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { motion, useScroll, useMotionValue, useTransform, useMotionTemplate, AnimatePresence } from "framer-motion";
import useWindowWidth from "../../utils/useWindowWidth";
import MobileMenu from "./MobileMenu";

let scrollThreshold = [0, 50];

import { links } from "data/menu";

export default function Navbar() {
  let { scrollY } = useScroll();
  let scrollYOnDirectionChange = useRef(scrollY.get());
  let lastPixelsScrolled = useRef();
  let lastScrollDirection = useRef();
  let pixelsScrolled = useMotionValue(0);
  let backgroundOpacity = useTransform(pixelsScrolled, scrollThreshold, [1, 0]);
  let backgroundColorTemplate = useMotionTemplate`rgba(250 250 250 / ${backgroundOpacity})`;
  let moveY = useTransform(pixelsScrolled, scrollThreshold, ["0%", "-100%"]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < 0) return;
      let isScrollingDown = scrollY.getPrevious() - latest < 0;
      let scrollDirection = isScrollingDown ? "down" : "up";
      let currentPixelsScrolled = pixelsScrolled.get();
      let newPixelsScrolled;
      if (lastScrollDirection.current !== scrollDirection) {
        lastPixelsScrolled.current = currentPixelsScrolled;
        scrollYOnDirectionChange.current = latest;
      }
      if (isScrollingDown) {
        newPixelsScrolled = Math.min(
          lastPixelsScrolled.current + (latest - scrollYOnDirectionChange.current),
          scrollThreshold[1]
        );
      } else {
        newPixelsScrolled = Math.max(
          lastPixelsScrolled.current - (scrollYOnDirectionChange.current - latest),
          scrollThreshold[0]
        );
      }

      pixelsScrolled.set(newPixelsScrolled);
      lastScrollDirection.current = scrollDirection;
    });
  }, [pixelsScrolled, scrollY]);
  const { windowWidth } = useWindowWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function MenuLink({ href, children }) {
    const isAnchor = Array.from(href).filter((el) => el === "#").length > 0;
    return (
      <Link href={href} className="" scroll={!isAnchor}>
        {children}
      </Link>
    );
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-30"
        style={{ backgroundColor: backgroundColorTemplate, y: moveY }}>
        <div className="max-w-screen-2xl px-[32px] mx-auto flex justify-between py-4">
          <Link href="/" className="font-extrabold">
            wiwoproduction.com
          </Link>
          <div className="space-x-7">
            {windowWidth > 768 ? (
              <>
                {links.map((link, ind) => (
                  <MenuLink key={ind} href={link.href}>
                    {link.label}
                  </MenuLink>
                ))}
              </>
            ) : (
              <>
                <a
                  onClick={() => {
                    setIsMenuOpen((prev) => !prev);
                  }}>
                  MENU
                </a>
              </>
            )}
          </div>
        </div>
      </motion.header>
      <AnimatePresence>{isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}</AnimatePresence>
    </>
  );
}
