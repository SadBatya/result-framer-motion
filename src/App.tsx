import "./App.css";
import { Button, FramerButton, Section } from "./shared/ui";
import { motion } from "motion/react";
import { Navigation } from "./widgets";

const lisText = [
  "Далеко-далеко за словесными горами в стране.",
  "Далеко-далеко за словесными горами в стране.",
  "Далеко-далеко за словесными горами в стране.",
  "Далеко-далеко за словесными горами в стране.",
];

const listAnimation = {
  initial: { opacity: 0, translateY: 20 },

  animate: (custom: number) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      delay: 0.2 * custom,
    },
  }),
};

function App() {
  return (
    <>
      <Section>
        <Button>Кнопка</Button>
        <FramerButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Кнопка
        </FramerButton>
      </Section>
      <Section>
        <motion.h1
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          MK - Framer Motion
        </motion.h1>
      </Section>
      <Section>
        <ul className="list">
          {lisText.map((str, index) => (
            <motion.li
              key={index}
              initial="initial"
              whileInView="animate"
              variants={listAnimation}
              className="list__item"
              custom={index}
            >
              {str}
            </motion.li>
          ))}
        </ul>
      </Section>
      <Section>
        <Navigation />
      </Section>
    </>
  );
}

export default App;
