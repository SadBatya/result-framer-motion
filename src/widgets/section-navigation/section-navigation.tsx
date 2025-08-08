import clsx from "clsx";
import { useState } from "react";

import { Section } from "@/shared/ui";
import style from "./section-navigation.module.css";

import reactImage from "@/assets/react.png";
import vueImage from "@/assets/vue.png";
import angularImage from "@/assets/angular.png";

import { motion, AnimatePresence } from "motion/react";

const images = [reactImage, vueImage, angularImage];

export const SectionNavigation = () => {
  const [beforeActiveTab, setBeforeActiveTab] = useState(0);
  const [afterActiveTab, setAfterActiveTab] = useState(0);

  return (
    <Section className={style.section}>
      <div className={style.container}>
        <nav className={style.navigation}>
          <ul className={style.navigation__list}>
            {["React", "Vue", "Angular"].map((str, index) => (
              <li
                onClick={() => setBeforeActiveTab(index)}
                key={index}
                className={clsx(
                  style.navigation__list_item,
                  beforeActiveTab === index && style.active__tab
                )}
              >
                {str}
              </li>
            ))}
          </ul>
        </nav>
        <img className={style.logo} src={images[beforeActiveTab]} alt="" />
      </div>
      <div className={style.container}>
        <nav className={style.navigation}>
          <ul className={style.navigation__list}>
            {["React", "Vue", "Angular"].map((str, index) => (
              <motion.li
                onClick={() => setAfterActiveTab(index)}
                key={index}
                className={style.navigation__list_item_custom}
              >
                {str}
                {index == afterActiveTab && (
                  <motion.div
                    className={style.underline}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    layoutId="underline"
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
        <AnimatePresence mode="wait">
          <motion.img
            key={afterActiveTab ? afterActiveTab : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={style.logo}
            src={images[afterActiveTab]}
            alt=""
          />
        </AnimatePresence>
      </div>
    </Section>
  );
};
