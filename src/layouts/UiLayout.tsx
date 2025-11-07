import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import styles from "./UiLayout.module.css";

export default function UiLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

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
          <NavLink
            to="/modal"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Modal
          </NavLink>
        </nav>
      </aside>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
