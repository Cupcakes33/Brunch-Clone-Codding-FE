import { Outlet } from "react-router-dom";
import Nav from "../../components/navLayout/Nav/Nav";

const NavLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default NavLayout;
