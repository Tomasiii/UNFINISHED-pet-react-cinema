import MenuItem from "@components/Navigation/Menu/MenuItem/MenuItem";

import style from "./menu.module.scss";
import { IMenu } from "./menu.type";

interface IProps {
  data: IMenu;
}

const Menu = ({ data: { title, items } }: IProps) => {
  return (
    <div className={style.menu}>
      <p>{title}</p>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <MenuItem iconData={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
