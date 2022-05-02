import { NavLink } from "react-router-dom";

import MaterialIcon from "@components/Navigation/Menu/MenuItem/MaterialIcon";
import { IMenuItem } from "@components/Navigation/Menu/menu.type";

import style from "./material-item.module.scss";

interface IProps {
  iconData: IMenuItem;
}

const MenuItem = ({ iconData: { icon, title, link } }: IProps) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? style.linkActive : style.link)}
    >
      <MaterialIcon icon={icon} />
      <p>{title}</p>
    </NavLink>
  );
};

export default MenuItem;
