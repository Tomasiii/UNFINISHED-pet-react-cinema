import { FC, MouseEvent } from "react";

import MaterialIcon from "@components/Icon/MaterialIcon";

import { useActions } from "@hooks/useActions";

const LogoutButton: FC = () => {
  const { logout } = useActions();

  const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    logout();
  };

  return (
    <li>
      <a onClick={logoutHandler}>
        <MaterialIcon icon="MdLogout" />
        <span>Logout</span>
      </a>
    </li>
  );
};

export default LogoutButton;
