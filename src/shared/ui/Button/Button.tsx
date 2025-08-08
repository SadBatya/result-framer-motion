import type { ReactNode, RefObject } from "react";
import style from "./Button.module.css";
import clsx from "clsx";
import { motion } from "motion/react";

interface Props {
  children: ReactNode;
  className?: string;
  ref: RefObject<HTMLButtonElement>;
}

export const Button = ({ children, className, ref }: Props) => (
  <button className={clsx(style.button, className)} ref={ref}>
    {children}
  </button>
);

export const FramerButton = motion.create(Button);
