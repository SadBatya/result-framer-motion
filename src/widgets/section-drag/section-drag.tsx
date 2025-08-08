"use client";

import { Section } from "@/shared/ui";
import style from "./section-drag.module.css";
import { motion } from "motion/react";
import { useRef } from "react";
import music from "@/assets/audio.mp3";

export const SectionDrag = () => {
  const constraintsRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<HTMLAudioElement | null>(null);

  return (
    <Section className={style.section}>
      <audio ref={playerRef} src={music} />
      <div ref={constraintsRef} className={style.drag__container}>
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            key={index}
            drag
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 2,
                delay: 0.3 * index,
              },
            }}
            className={style.box}
            whileDrag={{ scale: 0.9 }}
            dragConstraints={constraintsRef}
            onDragStart={() => playerRef.current?.play()}
          />
        ))}
      </div>
    </Section>
  );
};
