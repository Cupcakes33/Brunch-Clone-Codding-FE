import styled from "styled-components";
import spriteImg from "../../styles/img/spriteImg.png";

const StEmailIconImg = styled.img`
  width: 80px;
  height: 70px;
  border-radius: 100px;
`;
const StEmailIconSpan = styled.span`
  background-image: url(${spriteImg});
  width: 48px;
  height: 48px;
  display: inline-block;
  background-position: 0px -60px;
`;
const StStrong = styled.strong`
  color: ${(props) => props.theme.color.__text_main};
  font-size: ${(props) => props.theme.font.small};
  font-weight: 400;
`;
const StProfileImg = styled.img`
  width: 80px;
  height: 70px;
  border-radius: 100px;
  right: 0;
  position: absolute;
`;
const StUserStrong = styled.strong`
  color: ${(props) => props.theme.color.__text_sub};
  font-size: ${(props) => props.theme.font.sm};
  margin: 20px 0;
`;
const StUserP = styled.p`
  color: ${(props) => props.theme.color.__text_sub};
  font-size: ${(props) => props.theme.font.small};
`;
const StProfileDiv = styled.div`
  margin-top: 20px;
`;
const StSpan = styled.span`
  color: ${(props) => props.theme.color.__text_sub};
  font-size: ${(props) => props.theme.font.small};
  margin-left: 10px;
`;
const StCheckboxSpan = styled.span`
  color: ${(props) => props.theme.color.__line_contents};
  font-size: 0.7rem;
  margin-left: 10px;
`;
const StEmailButton = styled.button`
  width: 128px;
  height: 32px;
  right: 0;
  position: absolute;
  color: ${(props) => props.theme.color.__text_main};
  border-radius: 16px;
  background-color: #ffffff;
  border: 1px solid #bbb;
`;
const StEventDiv = styled.div`
  display: flex;
  margin: 12px 0 48px 0;
`;
const StA = styled.a`
  color: ${(props) => props.theme.color.__text_main};
  text-decoration: underline;

  font-size: ${(props) => props.theme.font.small};
`;

export {
  StEmailIconImg,
  StEmailIconSpan,
  StStrong,
  StUserStrong,
  StProfileImg,
  StUserP,
  StProfileDiv,
  StSpan,
  StEmailButton,
  StEventDiv,
  StCheckboxSpan,
  StA,
};
