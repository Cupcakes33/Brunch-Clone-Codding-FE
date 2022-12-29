import { useState, useEffect } from "react";
import { ItemLogo, ItemServiceMenuBtn } from "../imgItems";
import SideMenu from "../SideMenu/SideMenu";
import CommonBox from "../../common/CommonBox";
import { StNav, StNavCenterSpan } from "./style";

import useScrollDetection from "../../../hooks/useScrollDetection";
import SerchBar from "../SearchBar/SearchBar";

const Nav = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const scrollPosition = useScrollDetection(200);
  
  return (
    <>
      <StNav scrolled={scrollPosition > 80 ? true : false}>
        <SideMenu
          isSideMenuOpen={isSideMenuOpen}
          setIsSideMenuOpen={setIsSideMenuOpen}
        />
        <CommonBox flexDirection={"row"} gap={"12px"}>
          <ItemServiceMenuBtn
            onClick={() => {
              setIsSideMenuOpen(true);
            }}
          />
          <ItemLogo />
        </CommonBox>
        <StNavCenterSpan>브런치 나우</StNavCenterSpan>
        <SerchBar />
      </StNav>
    </>
  );
};

export default Nav;
