import styled from "styled-components";
import spriteImg from "../../styles/spriteImg.png";
const StEditSettingDiv = styled.div`
  margin: 103px auto 0;
  width: 700px;
  padding-bottom: 100px;
`;
const StSetInfoSnsInfoDiv = styled.div`
  padding-bottom: 43px;
  border-bottom: 1px solid #eee;
  margin-top: 47px;
`;
const StSetInfoSnsInfoStrong = styled.strong`
  display: block;
  font-size: ${(props) => props.theme.font.small};
  font-weight: 400;
`;
const StSetInfoSnsInfoLabel = styled.label`
  font-size: ${(props) => props.theme.font.small};
  font-weight: 400;
`;
const StContentInfoDiv = styled.div`
  overflow: hidden;
  padding: 12px 0 1px;
`;
const StContentInfoTextInputDiv = styled.div`
  margin-top: 8px;
  float: left;
`;
const StContentInfoTextKakaoIconSpan = styled.span`
  background-image: url(${spriteImg});
  width: 48px;
  height: 48px;
  display: inline-block;
  background-position: 0px -60px;
`;
const StContentInfoTextAcountSpan = styled.span`
  margin-left: 8px;
  vertical-align: middle;
  color: ${(props) => props.theme.color.__text_main};

  font-size: ${(props) => props.theme.font.base};
`;
const StContentInfoButtonDiv = styled.div`
  margin-top: 0;
  float: right;
`;
const StContentInfoButtonA = styled.a`
  box-sizing: border-box;
  line-height: 30px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.color.__border};
  width: 128px;
  color: #666;
  border-radius: 16px;
  float: left;
  font-size: ${(props) => props.theme.font.small};
  text-decoration: none;
`;
const StSetInfoProfileDiv = styled.div`
  margin-top: 47px;
  border-bottom: 1px solid #eee;
  padding-bottom: 32px;
  overflow: hidden;
  position: relative;
`;
const StSetInfoProfileH3 = styled.h3`
  color: ${(props) => props.theme.color.__text_main};
  display: block;
  font-size: ${(props) => props.theme.font.small};
  font-weight: 400;
`;
const StSetInfoProfileImgDiv = styled.div`
  position: absolute;
  right: 0;
  top: 28px;
  width: 80px;
`;
const StSetInfoProfileImg = styled.img`
  width: 80px;
  height: 70px;
  border-radius: 100px;
`;
const StSetInfoProfileStrong = styled.strong`
  display: block;
  font-size: 20px;
  font-weight: 400;
  line-height: 34px;
  margin: 14px 170px 0 0;
  color: ${(props) => props.theme.color.__text_main};
`;
const StSetInfoProfileP = styled.p`
  color: #666;
  font-size: 13px;
  font-weight: 200;
  line-height: 22px;
  margin: 12px 170px 0 0;
`;
const StSetInfoProfileButtonDiv = styled.div`
  float: right;
  margin-top: 19px;
`;
const StSetInfoProfileButtonA = styled.a`
  width: 116px;
  height: 32px;
  border: 1px solid ${(props) => props.theme.color.__line_contents};
  margin: 0, 0, 0, 5px;
  float: left;
  display: block;
  font-size: ${(props) => props.theme.font.small};
  text-decoration: none solid ${(props) => props.theme.color.__line_contents};
  border-radius: 16px;
  color: ${(props) => props.theme.color.__line_contents};
  text-align: center;
  line-height: 31px;
`;
const StSetInfoEmailDiv = styled.div`
  position: relative;
  margin-top: 57px;
  margin-bottom: 31px;
`;
const StSetInfoEmailH3 = styled.h3`
  font-weight: 400;
  color: ${(props) => props.theme.color.__text_main};
  font-size: ${(props) => props.theme.font.small};
`;
const StSetInfoEmailSpan = styled.span`
  color: ${(props) => props.theme.color.__text_caption_1};
  font-weight: 300;
  padding-left: 7px;
`;
export {
  StEditSettingDiv,
  StSetInfoSnsInfoDiv,
  StSetInfoSnsInfoStrong,
  StSetInfoSnsInfoLabel,
  StContentInfoDiv,
  StContentInfoTextInputDiv,
  StContentInfoTextKakaoIconSpan,
  StContentInfoTextAcountSpan,
  StContentInfoButtonDiv,
  StContentInfoButtonA,
  StSetInfoProfileDiv,
  StSetInfoProfileH3,
  StSetInfoProfileImgDiv,
  StSetInfoProfileImg,
  StSetInfoProfileStrong,
  StSetInfoProfileP,
  StSetInfoProfileButtonDiv,
  StSetInfoProfileButtonA,
  StSetInfoEmailDiv,
  StSetInfoEmailH3,
  StSetInfoEmailSpan,
};
