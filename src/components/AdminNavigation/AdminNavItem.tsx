import { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./AdminNavigation.module.scss";
import { INavItem } from "./admin-navigation.interface";

const AdminNavItem: FC<{ navItem: INavItem }> = ({ navItem }) => {
  return (
    <li>
      <NavLink
        to={navItem.link}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        {navItem.title}
      </NavLink>
    </li>
  );
};

export default AdminNavItem;
