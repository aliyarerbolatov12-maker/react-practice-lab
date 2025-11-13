import React from "react";
import clsx from "clsx";
import styles from "./button.module.css";

interface ButtonProps {
  variant?: "default" | "icon" | "disabled" | "loading";
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  icon,
  onClick,
}) => {
  const isDisabled = variant === "disabled" || variant === "loading";

  return (
    <button
      className={clsx(styles.button, styles[variant])}
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
    >
      {variant === "loading" ? (
        <span className={styles.loader}></span>
      ) : (
        <>
          {icon && <span className={styles.icon}>{icon}</span>}
          {children && <span>{children}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
