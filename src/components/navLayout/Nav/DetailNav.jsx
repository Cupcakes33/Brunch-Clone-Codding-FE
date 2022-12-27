import { useState } from "react";
import { ItemLogo, ItemSearchBtn, ItemServiceMenuBtn } from "../imgItems";
import SideMenu from "../SideMenu/SideMenu";
import CommonBox from "../../common/CommonBox";
import { StNav, StNavCenterSpan } from "./style";

import useScrollDetection from "../../../hooks/useScrollDetection";

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
        <StNavCenterSpan>설정</StNavCenterSpan>
        <ItemSearchBtn />
      </StNav>
    </>
  );
};

export default Nav;
