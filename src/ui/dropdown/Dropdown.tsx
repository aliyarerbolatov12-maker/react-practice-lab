import { useRef, useState, useCallback, useEffect } from "react";
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (!optionsActive) return;

    if (e.key === "ArrowDown") {
      setActiveIndexOption((prev) => (prev + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      setActiveIndexOption((prev) =>
        prev <= 0 ? options.length - 1 : prev - 1
      );
    } else if (e.key === "Enter") {
      if (activeIndexOption >= 0 && activeIndexOption < options.length) {
        const option = options[activeIndexOption];
        setHeader(option.label);
        setOptionsActive(false);
        onSelect?.(option.label);
      }
    } else if (e.key === "Escape") {
      setOptionsActive(false);
    }
  };

  useEffect(() => {
    if (optionsActive) {
      setActiveIndexOption((prev) => (prev >= 0 ? prev : 0));
    }
  }, [optionsActive]);

  useClickOutside(
    [ref],
    useCallback(() => setOptionsActive(false), [])
  );

  return (
    <div
      className={styles.wrapper}
      ref={ref}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div
        className={styles.header}
        onClick={() => setOptionsActive((prev) => !prev)}
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
