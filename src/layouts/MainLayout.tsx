import Navigation from "@/components/Navigation/Navigation";
import Sidebar from "@/components/Sidebar/Sidebar";

interface IProps {
  children: JSX.Element | string;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <>
      <Sidebar />
      {children}
      <Navigation />
    </>
  );
};

export default MainLayout;
