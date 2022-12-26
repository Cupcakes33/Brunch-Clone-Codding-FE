import { useState, useLayoutEffect } from "react";
import { ItemLogo, ItemSearchBtn, ItemServiceMenuBtn } from "../imgItems";
import SideMenu from "../SideMenu/SideMenu";
import CommonBox from "../../common/CommonBox";
import { StNav, StNavCenterSpan } from "./style";
import throttle from "../../../libs/throttle";

const Nav = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [scrolledPosition, setScrolledPosition] = useState(0);

  const throttleScroll = throttle(() => {
    setScrolledPosition(window.scrollY);
  }, 200);

  useLayoutEffect(() => {
    window.addEventListener("scroll", throttleScroll);

    return () => {
      window.removeEventListener("scroll", throttleScroll);
    };
  }, []);

  return (
    <>
      <SideMenu
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
      <StNav scrolled={scrolledPosition > 80 ? true : false}>
        <CommonBox flexDirection={"row"} gap={"12px"}>
          <ItemServiceMenuBtn
            onClick={() => {
              setIsSideMenuOpen(true);
            }}
          />
          <ItemLogo />
        </CommonBox>
        <StNavCenterSpan>브런치 나우</StNavCenterSpan>
        <ItemSearchBtn />
      </StNav>
    </>
  );
};

export default Nav;
