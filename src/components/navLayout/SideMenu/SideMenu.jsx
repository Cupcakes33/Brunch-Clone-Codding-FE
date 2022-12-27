import { useEffect, useRef } from "react";
import { ItemBell, ItemLogoIcon, ItemSideMenulogo } from "../imgItems";
import CommonBox from "../../common/CommonBox";
import CommonButton from "../../common/CommonButton";
import {
  StSideMenuContainer,
  StSideMenuProfileWrapper,
  StSlideMenuBellIconBox,
  StSlideMenuProfileBox,
  StProfileImg,
  StSideMenuFooter,
  StSideMenuContentsWrapper,
  StSideMenuContentsUl,
  StSideMenuList,
  StSideMenuListLogoBox,
} from "./style";
import useOutsideClick from "../../../hooks/useOutsideClick";

const SideMenu = ({ isSideMenuOpen, setIsSideMenuOpen }) => {
  const sideMenu = useRef();
  useOutsideClick(sideMenu, setIsSideMenuOpen);

  return (
    <StSideMenuContainer active={isSideMenuOpen} ref={sideMenu}>
      {/* 로그인을 했을 경우 */}
      <StSideMenuProfileWrapper>
        <StSlideMenuBellIconBox>
          <CommonBox position="relative">
            <ItemBell />
          </CommonBox>
        </StSlideMenuBellIconBox>
        <StSlideMenuProfileBox>
          <StProfileImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wlxyxoyMlrTO-HKaSzLZ7rmKPh_7jNRSk0U8A3-YFQ&s" />
          <strong>우주</strong>
          <p>Made by Team 1</p>
          <CommonBox gap="5px" margin="15px 0">
            <CommonButton colorType={"contents"}>글쓰기</CommonButton>
            <CommonButton colorType={"contents"}>작가 신청</CommonButton>
          </CommonBox>
        </StSlideMenuProfileBox>
      </StSideMenuProfileWrapper>

      <StSideMenuContentsWrapper>
        <StSideMenuContentsUl>
          <StSideMenuList>
            <span />내 브런치
            <span />
          </StSideMenuList>
          <StSideMenuListLogoBox>
            <ItemSideMenulogo />
          </StSideMenuListLogoBox>

          <StSideMenuList>
            <span />
            브런치 홈<span />
          </StSideMenuList>
          <StSideMenuList>
            <span />
            브런치 나우
            <span />
          </StSideMenuList>
        </StSideMenuContentsUl>
      </StSideMenuContentsWrapper>

      <StSideMenuFooter>
        <ItemLogoIcon />
        <CommonBox gap="5px">
          <CommonButton>설정</CommonButton>
          <CommonButton>로그아웃</CommonButton>
        </CommonBox>
      </StSideMenuFooter>
      {/* 로그인을 하지 않았을 경우 */}
    </StSideMenuContainer>
  );
};

export default SideMenu;
