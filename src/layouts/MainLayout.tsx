import { memo } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "@components/Navigation/Navigation";
import Sidebar from "@components/Sidebar/Sidebar";

import ErrorBoundary from "@hooks/ErrorBoundary/ErrorBoundary";

import style from "./mainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className={style.main}>
      <Navigation />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
      <Sidebar />
    </div>
  );
};

export default memo(MainLayout);
