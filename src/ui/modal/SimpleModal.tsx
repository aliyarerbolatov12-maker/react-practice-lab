import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useMount } from "../../hooks/useMount";
import clsx from "clsx";
import styles from "./simple.module.css";

interface SimpleModalProps {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function SimpleModal({
  opened,
  onClose,
  children,
}: SimpleModalProps) {
  const { mounted, ref } = useMount<HTMLDivElement>({ opened });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (opened) {
      setTimeout(() => setAnimate(true), 0);
    } else {
      setAnimate(false);
    }
  }, [opened]);

  if (!mounted) return null;

  return createPortal(
    <div
      ref={ref}
      className={clsx(styles.container, { [styles.opened]: animate })}
    >
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.content}>{children}</div>
    </div>,
    document.body
  );
}
