import { useState, useRef, useEffect } from "react";
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
import LoginModal from "../../LoginModal/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../../../redux/slices/mainSlice";

const SideMenu = ({ isSideMenuOpen, setIsSideMenuOpen }) => {
  const dispatch = useDispatch();
  const sideMenu = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClick(sideMenu, setIsSideMenuOpen);

  useEffect(() => {
    dispatch(userInfo());
  }, []);

  const { writer, profileImage } = useSelector(
    (state) => state.main.sideMenuUserInfo
  );

  return (
    <>
      {isOpen && (
        <LoginModal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
      <StSideMenuContainer active={isSideMenuOpen} ref={sideMenu}>
        <StSideMenuProfileWrapper>
          <StSlideMenuBellIconBox>
            <CommonBox position="relative">
              <ItemBell />
            </CommonBox>
          </StSlideMenuBellIconBox>
          <StSlideMenuProfileBox>
            <div>
              {/* 토큰으로 불러온 이미지가 존재하면 프로필사진, 없다면 이미지를 불러온다 */}
              {profileImage ? (
                <StProfileImg src={profileImage} />
              ) : (
                <ItemLogoIcon />
              )}
            </div>
            <strong>{writer}</strong>
            <p>Made by Team 1</p>
            <CommonBox gap="5px" margin="15px 0">
              {/* 작가명이 undefined가 아니라면(정상적으로 로그인이 되어있다면) 글쓰기, 작가신청 버튼이 출력된다. */}
              {!writer ? (
                <CommonButton
                  colorType={"contents"}
                  onClick={() => {
                    setIsOpen(true);
                    setIsSideMenuOpen(false);
                  }}
                >
                  시작하기
                </CommonButton>
              ) : (
                <>
                  <CommonButton colorType={"contents"}>글쓰기</CommonButton>
                  <CommonButton colorType={"contents"}>작가 신청</CommonButton>
                </>
              )}
            </CommonBox>
          </StSlideMenuProfileBox>
        </StSideMenuProfileWrapper>

        <StSideMenuContentsWrapper>
          <StSideMenuContentsUl>
            {/* 위와 마찬가지로 로그인이 되어있다면 내 브런치 탭을 클릭할 수 있고, 로그인이 되어있지 않으면 출력해주지 않음 */}
            {writer ? (
              <>
                <StSideMenuList>
                  <span />내 브런치
                  <span />
                </StSideMenuList>
                <StSideMenuListLogoBox>
                  <ItemSideMenulogo />
                </StSideMenuListLogoBox>
              </>
            ) : null}

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
            {writer ? (
              <>
                <CommonButton>설정</CommonButton>
                <CommonButton
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}
                >
                  로그아웃
                </CommonButton>
              </>
            ) : null}
          </CommonBox>
        </StSideMenuFooter>
      </StSideMenuContainer>
    </>
  );
};

export default SideMenu;

// 가장 마음에 들지 않는 코드
// 리팩토링 할 부분 :
// 계정정보가 없으면 계정정보가 없는 컴포넌트
// 계정정보가 있으면 계정정보를 바인딩하는 컴포넌트
// 컴포넌트로 분리해서 {writer ? <계정있음> : <계정없음>}
// 이런식으로 했으면 더 좋았을 것 같다.
