import style from "./ProgressBar.module.css";
import { motion, useScroll } from "motion/react";

export const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className={style.progress__bar}
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};
