import { Section } from "@/shared/ui";
import style from "./section-welcome.module.css";
import resultLogo from "@/assets/result-logo.png";
import framerLogo from "@/assets/framer-logo.svg";

export const SectionWelcome = () => (
  <Section className={style.section}>
    <div className={style.overlay} />
    <h1 className={style.title}>МК - Framer Motion для CSS анимация</h1>
    <div className={style.logos}>
      <img className={style.logo} src={resultLogo} alt="" />
      <img className={style.logo} src={framerLogo} alt="" />
    </div>
  </Section>
);
