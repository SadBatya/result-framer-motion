import { Section } from "@/shared/ui";
import style from "./section-button.module.css";
import { motion } from "motion/react";

export const SectionButtons = () => (
  <Section>
    <div className={style.before}>
      <button className={style.button}>Жмякни</button>
    </div>
    <div className={style.after}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={style.button}
      >
        Жмякни тут
      </motion.button>
    </div>
  </Section>
);
