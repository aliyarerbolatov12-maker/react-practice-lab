import { useState, type ReactNode } from "react";
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
    <div className={styles.wrapper}>
      <div className={styles.tabHeader}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`${styles.tabButton} ${
              active === i ? styles.active : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>{tabs[active].content}</div>
    </div>
  );
}
