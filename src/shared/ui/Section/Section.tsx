import type { ReactNode } from "react";
import style from "./Section.module.css";

interface Props {
  children: ReactNode;
}

export const Section = ({ children }: Props) => (
  <section className={style.section}>{children}</section>
);
