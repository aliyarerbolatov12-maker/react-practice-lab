import { useState, useRef, useCallback } from "react";
import { Outlet, NavLink } from "react-router-dom";
import styles from "./UiLayout.module.css";
import useClickOutside from "../hooks/useClickOutside";

export default function UiLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const ignoreNextMouseDownRef = useRef(false);

  const links = [
    { to: "/modal", label: "Modal" },
    { to: "/tabs", label: "Tabs" },
    { to: "/dropdown", label: "Dropdown" },
    { to: "/accordion", label: "Accordion" },
  ];

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  useClickOutside(
    sidebarRef,
    useCallback(() => {
      if (ignoreNextMouseDownRef.current) {
        ignoreNextMouseDownRef.current = false;
        return;
      }
      setSidebarOpen(false);
    }, [])
  );

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <div className={styles.layout}>
      <button
        ref={buttonRef}
        className={`${styles.menuButton} ${sidebarOpen ? styles.open : ""}`}
        onMouseDown={() => {
          ignoreNextMouseDownRef.current = true;
        }}
        onClick={toggleSidebar}
      >
        ☰
      </button>

      <aside
        ref={sidebarRef}
        className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}
      >
        <h3 className={styles.title}>UI Components</h3>
        <nav className={styles.nav}>
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={getLinkClass}>
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
