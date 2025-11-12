import { useRef, useState, useCallback } from "react";
import styles from "./dropdown.module.css";
import useClickOutside from "../../hooks/useClickOutside";

type Option = {
  label: string;
};

interface DropDownProps {
  optionsHeader: string;
  options: Option[];
  onSelect?: (label: string) => void;
}

export default function DropDown({
  optionsHeader,
  options,
  onSelect,
}: DropDownProps) {
  const [optionsActive, setOptionsActive] = useState(false);
  const [header, setHeader] = useState(optionsHeader);
  const [activeIndexOption, setActiveIndexOption] = useState(-1);

  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(
    [ref],
    useCallback(() => setOptionsActive(false), [])
  );

  return (
    <div className={styles.wrapper} ref={ref}>
      <div
        className={styles.header}
        onClick={() => setOptionsActive((prev) => !prev)}
        tabIndex={0}
      >
        {header}
      </div>
      <ul className={`${styles.options} ${optionsActive ? styles.open : ""}`}>
        {options.map((option, i) => (
          <li
            key={i}
            onClick={() => {
              setHeader(option.label);
              setOptionsActive(false);
              setActiveIndexOption(i);
              if (onSelect) onSelect(option.label);
            }}
            className={`${activeIndexOption === i ? styles.active : ""}`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
