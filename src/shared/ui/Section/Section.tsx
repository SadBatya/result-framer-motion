import type { ReactNode } from "react";
import style from "./Section.module.css";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Section = ({ children, className }: Props) => (
  <section className={clsx(style.section, className)}>{children}</section>
);
