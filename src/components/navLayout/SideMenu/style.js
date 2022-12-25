import styled, { css } from "styled-components";

const StSideMenuContainer = styled.section`
  width: 260px;
  height: 100%;
  z-index: 10;
  min-height: 100vh;
  position: fixed;
  border-right: 1px solid ${(propos) => propos.theme.color.__line_border};
  transition: ease-in 0.3s;
  transform: translateX(-260px);
  ${(props) =>
    props.active &&
    css`
      transform: translateX(0);
    `}
`;

const StSideMenuProfileWrapper = styled.div`
  height: 25%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.__nav_bg};
  border-bottom: 1px solid ${(propos) => propos.theme.color.__line_border};
`;

const StSlideMenuBellIconBox = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 14px;
  right: 14px;
`;

const StSlideMenuProfileBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: ${(props) => props.theme.font.small};
    color: ${(props) => props.theme.color.__text_caption_1};
  }
`;

const StProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const StSideMenuFooter = styled.div`
  width: 100%;
  height: 25%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  bottom: 0;
`;

const StSideMenuContentsWrapper = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.padding.lg} 0;
`;

const StSideMenuContentsUl = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  padding: 0;
`;

const StSideMenuList = styled.li`
  list-style: none;
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.color.__text_main};
  font-size: ${(props) => props.theme.font.small};
  font-weight: ${(props) => props.theme.fontWeight.demiLight};

  span {
    visibility: hidden;
    position: absolute;
    display: block;
    width: 35px;
    height: 1px;
    background-color: ${(props) => props.theme.color.__line_contents};

    top: 50%;
    &:first-child {
      left: 20%;
    }
    &:last-child {
      right: 20%;
    }
  }
  &:hover {
    color: ${(props) => props.theme.color.__line_contents};
    span {
      visibility: visible;
    }
  }

  ${(props) =>
    props.checked &&
    css`
      color: ${(props) => props.theme.color.__line_contents};
      span {
        visibility: visible;
      }
    `}
`;

const StSideMenuListLogoBox = styled.li`
  display: flex;
  justify-content: center;
  margin: 30px 0px;

`

export {
  StSideMenuContainer,
  StSideMenuProfileWrapper,
  StSlideMenuBellIconBox,
  StSlideMenuProfileBox,
  StProfileImg,
  StSideMenuFooter,
  StSideMenuContentsWrapper,
  StSideMenuContentsUl,
  StSideMenuList,
  StSideMenuListLogoBox
};
