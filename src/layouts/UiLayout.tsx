import { Outlet, NavLink } from "react-router-dom";
import styles from "./UiLayout.module.css";

export default function UiLayout() {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
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
