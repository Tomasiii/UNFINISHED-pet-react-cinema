import { Link } from "react-router-dom";

import GenreMenu from "@components/Navigation/GenreMenu/GenreMenu";
import Menu from "@components/Navigation/Menu/Menu";
import { navGroupData } from "@components/Navigation/Menu/menu.data";

import logo from "@assets/images/logo.svg";

import style from "./navigation.module.scss";

interface IProps {}

const Navigation = ({}: IProps) => {
  return (
    <div className={style.menuContainer}>
      <div>
        <Link to="/">
          <img className={style.logo} src={logo} alt="logotype" />
        </Link>
        <div>
          <Menu data={navGroupData.menu} />
          <GenreMenu />
          <Menu data={navGroupData.general} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
