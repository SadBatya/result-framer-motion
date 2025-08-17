import { useRef } from "react";
import { Section } from "@/shared/ui";
import style from "./section-in-view.module.css";
import { useInView, motion } from "motion/react";
import tgVladilen from "@/assets/tg_vladilen.png";
import tgResult from "@/assets/tg-result.png";
import github from "@/assets/github.png";

const links = [
  {
    text: "TailwindCSS",
    href: "https://tailwindcss.com/",
  },
  {
    text: "Tanstack Query",
    href: "https://tanstack.com/query/latest",
  },
  {
    text: "Swiper Slider",
    href: "https://swiperjs.com/",
  },
  {
    text: "Embla Slider",
    href: "https://embla-carousel.com/",
  },
  {
    text: "Framer Motion",
    href: "https://motion.dev/",
  },
];

export const SectionInView = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <Section className={style.section}>
      <motion.div
        animate={{ width: inView ? "100%" : 0 }}
        transition={{ duration: 2 }}
        className={style.overlay}
      />
      <div ref={ref}>
        <motion.h2
          initial={{
            opacity: 0,
            translateY: 20,
          }}
          className={style.title}
          animate={{
            opacity: inView ? 1 : 0,
            translateY: inView ? 0 : 20,
            transition: {
              duration: 2,
              delay: 1,
            },
          }}
        >
          Вопросы ?
        </motion.h2>
        <div className={style.links}>
          <div className={style.qr__container}>
            <h4 className={style.link__title}>Телеграм Владилен</h4>
            <img className={style.qr} src={tgVladilen} alt="" />
          </div>
          <div className={style.qr__container}>
            <h4 className={style.link__title}>Телеграм Result</h4>
            <img className={style.qr} src={tgResult} alt="" />
          </div>
          <div className={style.qr__container}>
            <h4 className={style.link__title}>Ссылка на репозиторий</h4>
            <img className={style.qr} src={github} alt="" />
          </div>
        </div>
        <h2 className={style.title}>Полезная документация</h2>
        <ul className={style.list__documents}>
          {links.map((link, index) => (
            <li key={index}>
              <a target="_blank" href={link.href}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
