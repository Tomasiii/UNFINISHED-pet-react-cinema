import { IMenu } from "./menu.type";

export const menu: IMenu = {
  title: "Menu",
  items: [
    {
      icon: "MdHome",
      link: "/",
      title: "Home",
    },
    {
      icon: "MdExplore",
      link: "/genres",
      title: "Discovery",
    },
    {
      icon: "MdRefresh",
      link: "/fresh",
      title: "Fresh movies",
    },
    {
      icon: "MdLocalFireDepartment",
      link: "/trending",
      title: "Trending now",
    },
  ],
};

export const general: IMenu = {
  title: "General",
  items: [
    {
      icon: "MdLocalFireDepartment",
      link: "/auth",
      title: "Auth",
    },
  ],
};

export const navGroupData = {
  menu,
  general,
};
