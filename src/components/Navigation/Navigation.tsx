import { Link } from "react-router-dom";

import Menu from "@components/Navigation/Menu/Menu";
import { navGroupData } from "@components/Navigation/Menu/menu.data";

import logo from "@assets/logo.svg";

import style from "./navigation.module.scss";

interface IProps {}

const Navigation = ({}: IProps) => {
  return (
    <div>
      <Link to="/">
        <img className={style.logo} src={logo} alt="logotype" />
      </Link>
      <div>
        <Menu data={navGroupData.menu} />
        {/* <Menu data={navGroupData.menu} />*/}
        <Menu data={navGroupData.general} />
      </div>
    </div>
  );
};

export default Navigation;
