import { useState } from "react";
import clsx from "clsx";
import styles from "./accordion.module.css";

interface AccordionProps {
  title: string;
  answer: string;
}

const Accordion = ({ title, answer }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>{title}</span>
        <button className={styles.btn} onClick={() => setOpen(!open)}>
          {open ? "−" : "+"}
        </button>
      </div>

      <div className={clsx(styles.contentWrapper, { [styles.open]: open })}>
        <div className={styles.content}>{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
