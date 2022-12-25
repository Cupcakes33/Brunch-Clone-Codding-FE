import { useState, useRef, useLayoutEffect } from "react";

import { ItemLogo, ItemSearchBtn, ItemServiceMenuBtn } from "../imgItems";
import SideMenu from "../SideMenu/SideMenu";

import CommonBox from "../../common/CommonBox";
import { StNav, StNavCenterSpan } from "./style";

const Nav = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [scrolledPosition, setScrolledPosition] = useState(0);

  const scrollHandler = () => {
    setScrolledPosition(window.scrollY);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
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
