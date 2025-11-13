import { useState, type ReactNode } from "react";
import clsx from "clsx";
import styles from "./tabs.module.css";

type Tab = {
  label: string;
  content: ReactNode;
};

interface TabsProps {
  tabs: Tab[];
}

export function Tabs({ tabs }: TabsProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className={styles.tabHeader}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={clsx(styles.tabButton, {
              [styles.active]: active === i,
            })}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>{tabs[active].content}</div>
    </div>
  );
}
