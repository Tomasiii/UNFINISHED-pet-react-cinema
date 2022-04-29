import Navigation from "@components/Navigation/Navigation";
import Sidebar from "@components/Sidebar/Sidebar";
import ErrorBoundary from "@hooks/ErrorBoundary/ErrorBoundary";
import React from "react";

interface IProps {
  children: JSX.Element;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <>
      <Sidebar />
      <ErrorBoundary>{children}</ErrorBoundary>
      <Navigation />
    </>
  );
};

export default MainLayout;
