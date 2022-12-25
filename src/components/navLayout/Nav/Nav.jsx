import { ItemLogo, ItemSearchBtn, ItemServiceMenuBtn } from "../imgItems";
import CommonBox from "../../common/CommonBox";
import { StNav, StNavCenterSpan } from "./style";

const Nav = () => {
  return (
    <>
      <StNav>
        <CommonBox flexDirection={"row"} gap={"12px"}>
          <ItemServiceMenuBtn />
          <ItemLogo />
        </CommonBox>
        <StNavCenterSpan>브런치 나우</StNavCenterSpan>
        <ItemSearchBtn />
      </StNav>
    </>
  );
};

export default Nav;
