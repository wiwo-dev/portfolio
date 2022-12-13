import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

function RotateOnScroll({ children }) {
  const ref = useRef();
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0% end", "start 80px"],
  });
  let rotateZ = useTransform(scrollYProgress, [0, 1], [360, 0]);
  return (
    <motion.div ref={ref} style={{ rotateZ }}>
      {children}
    </motion.div>
  );
}

export default RotateOnScroll;
