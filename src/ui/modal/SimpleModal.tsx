import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useMount } from "../../hooks/useMount";
import clsx from "clsx";
import styles from "./simple.module.css";

interface SimpleModalProps {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
  titleId?: string;
}

export default function SimpleModal({
  opened,
  onClose,
  children,
  titleId = "modal-title",
}: SimpleModalProps) {
  const { mounted, ref } = useMount<HTMLDivElement>({ opened });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (opened) {
      setTimeout(() => setAnimate(true), 20);
    } else {
      setAnimate(false);
    }
  }, [opened]);

  if (!mounted) return null;

  return createPortal(
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className={clsx(styles.container, { [styles.opened]: animate })}
    >
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.content}>{children}</div>
    </div>,
    document.body
  );
}
