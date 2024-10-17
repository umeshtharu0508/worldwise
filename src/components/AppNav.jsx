import React from "react";
import styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";
// import { nav } from "./AppNav.module.css";
function AppNav() {
  return (
    <nav className={styles.nav}>
      {/* App Navigation */}
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
