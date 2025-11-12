import { useState, useRef, useCallback } from "react";
import { Outlet, NavLink } from "react-router-dom";
import styles from "./UiLayout.module.css";
import useClickOutside from "../hooks/useClickOutside";

export default function UiLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const refs = [sidebarRef, toggleButtonRef];

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  useClickOutside(refs, closeSidebar);

  const navLinks = [
    { to: "/modal", label: "Modal" },
    { to: "/tabs", label: "Tabs" },
    { to: "/dropdown", label: "Dropdown" },
    { to: "/accordion", label: "Accordion" },
  ];

  const getLinkClass = useCallback(
    ({ isActive }: { isActive: boolean }) =>
      `${styles.link} ${isActive ? styles.active : ""}`,
    []
  );

  return (
    <div className={styles.layout}>
      <button
        ref={toggleButtonRef}
        className={`${styles.menuButton} ${isSidebarOpen ? styles.open : ""}`}
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
        aria-expanded={isSidebarOpen}
      >
        ☰
      </button>

      <aside
        ref={sidebarRef}
        className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}
      >
        <h3 className={styles.title}>UI Components</h3>
        <nav className={styles.nav}>
          {navLinks.map(({ to, label }) => (
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
