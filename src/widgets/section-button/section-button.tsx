import { Section, FramerButton } from "@/shared/ui";
import style from "./section-button.module.css";

export const SectionButtons = () => (
  <Section>
    <div className={style.before}>
      <FramerButton className={style.button}>Жмякни</FramerButton>
    </div>
    <div className={style.after}>
      <FramerButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={style.button}
      >
        Жмякни тут
      </FramerButton>
    </div>
  </Section>
);
