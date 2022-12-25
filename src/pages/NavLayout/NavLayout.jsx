import { Outlet } from "react-router-dom";

import Nav from "../../components/navLayout/Nav/Nav";
import SideMenu from "../../components/navLayout/SideMenu/SideMenu";

const NavLayout = () => {
  return (
    <>
      <Nav />
      <SideMenu />
      <Outlet />
    </>
  );
};

export default NavLayout;
