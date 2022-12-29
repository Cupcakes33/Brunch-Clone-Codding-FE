import { useState } from "react";
import {
  ItemCommentBtn,
  ItemHeartBtn,
  ItemLogo,
  ItemServiceMenuBtn,
} from "../imgItems";
import SideMenu from "../SideMenu/SideMenu";
import CommonBox from "../../common/CommonBox";
import { StNav, StDetailPageNavCenterSpan } from "./style";

import useScrollDetection from "../../../hooks/useScrollDetection";
import CommonButton from "../../common/CommonButton";

import styled from "styled-components";

const DetailNav = ({ itemlist }) => {
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
        <StDetailPageNavCenterSpan>
          <CommonButton sizeType="tag">{itemlist?.writer}</CommonButton>
          {itemlist?.title}
        </StDetailPageNavCenterSpan>
        <Stdiv>
          <CommonBox alignItems="center" gap="5px">
            <ItemHeartBtn checked />
            <span>{itemlist?.LikesCount}</span>
          </CommonBox>
          <CommonBox alignItems="center" gap="5px">
            <ItemCommentBtn />
            <span>{itemlist?.CommentsCount}</span>
          </CommonBox>
        </Stdiv>
      </StNav>
    </>
  );
};

export default DetailNav;

const Stdiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  color: ${(props) => props.theme.color.__text_sub};
  font-weight: ${(props) => props.theme.fontWeight.demiLight};
`;
