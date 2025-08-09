import { Section } from "@/shared/ui";
import { motion } from "motion/react";
import style from "./section-plan.module.css";

export const SectionPlan = () => (
  <Section className={style.section}>
    <motion.h2
      initial={{
        opacity: 0,
        translateY: 20,
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        transition: {
          duration: 2,
        },
      }}
      className={style.title}
    >
      План МК:
    </motion.h2>
    <ul className={style.plan__list}>
      {[
        "Для чего нужен Framer Motion",
        "В каких случаях стоит ее использовать",
        "Попробуем анимации на практике",
        "Вопросы?",
      ].map((str, index) => (
        <motion.li
          className={style.list__item}
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.2 * index }}
          key={index}
        >
          {str}
        </motion.li>
      ))}
    </ul>
  </Section>
);
