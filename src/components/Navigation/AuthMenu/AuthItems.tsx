import { FC } from "react";

import LogoutButton from "@components/Navigation/AuthMenu/LogoutButton";
import MenuItem from "@components/Navigation/Menu/MenuItem/MenuItem";

import isAuth from "@utils/isAuth";

import { getAdminHomeUrl } from "@configs/url.config";

const AuthItems: FC = () => {
  const user = isAuth();

  return (
    <>
      {user ? (
        <>
          <MenuItem
            iconData={{
              icon: "MdSettings",
              link: "/profile",
              title: "Profile",
            }}
          />
          <LogoutButton />
        </>
      ) : (
        <MenuItem
          iconData={{ icon: "MdLogin", link: "/auth", title: "Login" }}
        />
      )}

      {user?.isAdmin && (
        <MenuItem
          iconData={{
            icon: "MdOutlineLock",
            link: getAdminHomeUrl(),
            title: "Admin panel",
          }}
        />
      )}
    </>
  );
};

export default AuthItems;
