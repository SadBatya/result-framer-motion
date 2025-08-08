import { Reorder } from "motion/react";
import { useState } from "react";
import { Section } from "@/shared/ui";
import style from "./section-reorder.module.css";

export const SectionReorder = () => {
  const [items, setItems] = useState(["456", "001", "011", "388"]);

  console.log(items, "items");
  return (
    <Section>
      <Reorder.Group
        className={style.list}
        axis="y"
        values={items}
        onReorder={setItems}
      >
        {items.map((str) => (
          <Reorder.Item
            id={str}
            animate={{ opacity: 1, scale: 1 }}
            className={style.list__item}
            whileDrag={{ opacity: 0.8, scale: 1.2 }}
            key={str}
            value={str}
          >
            {str}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </Section>
  );
};
