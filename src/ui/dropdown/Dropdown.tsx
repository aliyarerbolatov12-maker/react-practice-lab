import { useRef, useState, useCallback } from "react";
import clsx from "clsx";
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
      <ul className={clsx(styles.options, { [styles.open]: optionsActive })}>
        {options.map((option, i) => (
          <li
            key={i}
            onClick={() => {
              setHeader(option.label);
              setOptionsActive(false);
              setActiveIndexOption(i);
              onSelect?.(option.label);
            }}
            className={clsx({ [styles.active]: activeIndexOption === i })}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
