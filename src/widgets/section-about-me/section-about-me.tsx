import style from "./section-about-me.module.css";
import { Section } from "@/shared/ui";
import { motion } from "motion/react";

export const SectionAboutMe = () => (
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
      Обо мне:
    </motion.h2>
    <ul className={style.list}>
      {[
        "Проходил курс Junior Frontend разработчик в Result School",
        "2+ лет в коммерческой разработке",
        "Поддерживаю основной сайт Result School",
        "Провожу МК для студентов",
        "Разрабатываю CRM в московской айти компании",
      ].map((item, index) => (
        <motion.li
          key={index}
          initial={{
            opacity: 0,
            translateY: 20,
          }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            transition: {
              duration: 2,
              delay: 0.3 * index,
            },
          }}
          className={style.list__item}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  </Section>
);
