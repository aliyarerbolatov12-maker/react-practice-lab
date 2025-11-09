import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import styles from "./UiLayout.module.css";

export default function UiLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const links = [
    { to: "/modal", label: "Modal" },
    { to: "/tabs", label: "Tabs" },
  ];

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <div className={styles.layout}>
      <button
        className={`${styles.menuButton} ${sidebarOpen ? styles.open : ""}`}
        onClick={toggleSidebar}
      >
        ☰
      </button>

      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
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
