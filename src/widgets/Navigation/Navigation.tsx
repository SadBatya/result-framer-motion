import { useState } from "react";
import style from "./Navigation.module.css";
import { motion } from "motion/react";

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={style.navigation}>
      <nav>
        <ul className={style.navigation__list}>
          {["React", "Vue", "Angular"].map((str, index) => (
            <li
              onClick={() => setActiveTab(index)}
              className={style.navigation__item}
            >
              {str}

              {activeTab === index && (
                <motion.div
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                  className={style.underline}
                  layoutId="underline"
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div>
        {activeTab === 0 && (
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            React
          </motion.p>
        )}
        {activeTab === 1 && (
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Vue
          </motion.p>
        )}
        {activeTab === 2 && (
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Angular
          </motion.p>
        )}
      </div>
    </div>
  );
};
