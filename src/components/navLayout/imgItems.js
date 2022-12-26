import styled from "styled-components";
import logo from "../../styles/img/logo.png";
import icons from "../../styles/img/icons.png";
import icons2 from "../../styles/img/icons2.png";

const logoDefault = styled.a`
  cursor: pointer;
  display: block;
`;

const ItemLogo = styled(logoDefault)`
  width: 72px;
  height: 22px;
  background-image: url(${logo});
`;

const ItemLogoIcon = styled(logoDefault)`
  width: 50px;
  height: 50px;
  background-image: url(${logo});
  background-position: 0 -25px;
`;

const iconDefault = styled.a`
  cursor: pointer;
  display: block;
  background-image: url(${icons2});
`;

const ItemBell = styled(iconDefault)`
  width: 22px;
  height: 22px;
  background-position: -27px -3px;
`;

const ItemSideMenulogo = styled(iconDefault)`
  width: 140px;
  height: 15px;
  background-position: -52px -5px;
`;

const btnDefault = styled.button`
  cursor: pointer;
  background: none;
  background-image: url(${icons});
`;

const ItemServiceMenuBtn = styled(btnDefault)`
  width: 27px;
  height: 22px;
  background-position: 0 -58px;
`;

const ItemSearchBtn = styled(btnDefault)`
  width: 22px;
  height: 22px;
  background-position: -30px 0;
`;

export {
  ItemLogo,
  ItemBell,
  ItemLogoIcon,
  ItemSearchBtn,
  ItemServiceMenuBtn,
  ItemSideMenulogo,
};

// 이미지 스프라이트 : 웹에서 사용할 (거의 바뀌지 않는) 이미지를 하나로 묶어 관리하는 작업
// 여러개의 아이콘이 들어있는 이미지에서 특정 크기와 특정 위치를 먼저 약속하고,
// 해당 이미지를 사용하려고 할 때 약속된 width & height와 background-position 으로 지정해 사용할 수 있다.
// 불러올 이미지가 단 한장뿐이므로 렌더링시 리소스를 적게 쓰는게 장점.
// 사용할 이미지나 로고가 많다면 나쁘지 않은 방법이지만, 이러한 클론코딩 프로젝트에서는 좋은 방법이 아닐 수 있다는 생각이 들었다.
