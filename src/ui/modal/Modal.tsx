import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";

interface ModalProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Modal = ({ title, content, onClose, isOpen }: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClose = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      const timer = setTimeout(() => setIsActive(true), 20);
      return () => clearTimeout(timer);
    } else {
      setIsActive(false);
    }
  }, [isOpen]);

  const handleTransitionEnd = useCallback(
    (e: TransitionEvent) => {
      if (e.target === modalRef.current && !isOpen) {
        setIsMounted(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    const modalEl = modalRef.current;
    if (!modalEl) return;

    modalEl.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      modalEl.removeEventListener("transitionend", handleTransitionEnd);
  }, [handleTransitionEnd]);

  if (!isMounted) return null;

  return ReactDOM.createPortal(
    <div
      ref={modalRef}
      className={`${styles.modal} ${isActive ? styles.active : ""}`}
      onClick={handleClose}
    >
      <div className={styles.modalOverlay}>
        <h2>{title}</h2>
        <div>{content}</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
