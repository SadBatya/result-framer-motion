import { Section } from "@/shared/ui";
import style from "./section-text.module.css";
import { motion } from "motion/react";

const animation = {
  initial: {
    opacity: 0,
    translateY: 20,
  },

  animate: (custom: number) => ({
    opacity: 1,
    delay: 0.2 * custom,
    translateY: 0,
    transition: {
      duration: 0.6,
      delay: 0.2 * custom,
    },
  }),
};

export const SectionText = () => (
  <Section className={style.section}>
    <motion.h2
      className={style.title__first}
      variants={animation}
      whileInView="animate"
      initial="initial"
      custom={1}
    >
      Result School
    </motion.h2>
    <motion.h3
      variants={animation}
      initial="initial"
      whileInView="animate"
      custom={2}
      className={style.title__second}
    >
      Framer Motion
    </motion.h3>
    <motion.h4
      variants={animation}
      initial="initial"
      whileInView="animate"
      custom={3}
      className={style.title__third}
    >
      MK
    </motion.h4>
    <ol className={style.number__list}>
      {[
        "Введение",
        "Плюс и Минусы библиотеки",
        "Фичи framer motion",
        "Навигация",
        "Плавные анимации",
      ].map((item, index) => (
        <motion.li
          key={index}
          variants={animation}
          initial="initial"
          whileInView="animate"
          custom={index + 4}
        >
          {item}
        </motion.li>
      ))}
    </ol>
  </Section>
);
