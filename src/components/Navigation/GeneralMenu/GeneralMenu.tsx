import LogoutButton from "@components/Navigation/GeneralMenu/LogoutButton";
import Menu from "@components/Navigation/Menu/Menu";
import { IMenuItem } from "@components/Navigation/Menu/menu.type";

import isAuth from "@utils/isAuth";

import { getAdminHomeUrl } from "@configs/url.config";

const GeneralMenu = () => {
  const user = isAuth();

  const generalData: IMenuItem[] = [];

  if (user) {
    generalData.push({
      icon: "MdSettings",
      link: "/profile",
      title: "Profile",
    });
    if (user.isAdmin) {
      generalData.push({
        icon: "MdOutlineLock",
        link: getAdminHomeUrl(),
        title: "Admin panel",
      });
    }
  } else {
    generalData.push({ icon: "MdLogin", link: "/auth", title: "Login" });
  }

  return (
    <>
      <Menu data={{ title: "General", items: generalData }} />
      {user && <LogoutButton />}
    </>
  );
};

export default GeneralMenu;
