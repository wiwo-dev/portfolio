import React from "react";
import { motion } from "framer-motion";

export default function MobileMenu({ onClose }) {
  return (
    <motion.nav
      className="fixed top-0 left-0 h-screen w-screen z-10 bg-salmon"
      initial={{ x: "100%", y: "-100%" }}
      animate={{ x: 0, y: 0 }}
      exit={{ x: "100%", y: "-100%" }}>
      <div className="flex justify-end p-5">
        <a onClick={onClose}>X</a>
      </div>
      MobileMenu
    </motion.nav>
  );
}
