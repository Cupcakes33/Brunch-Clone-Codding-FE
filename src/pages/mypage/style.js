import spriteImg from "../../styles/img/spriteImg.png";
import styled from "styled-components";

const StNavigatorDiv = styled.div`
  background-color: #f8f8f8;
  height: 120px;
  position: relative;
`;
const StNavigatorSpan = styled.span`
  background-image: url(${spriteImg});
  z-index: 100;
  position: absolute;
  bottom: 0;
  width: 46px;
  height: 46px;
  right: -13px;
  background-size: 210px;
  background-position: 0px -218px;
  cursor: pointer;
`;
const StNavigatorImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  z-index: 99;
`;
const StNavigatorInput = styled.input`
  display: none;
  position: absolute;
`;
const StProfileH3 = styled.h3`
  resize: none;
  position: relative;
  font-size: ${(props) => props.theme.font.small};
`;
const StProfileSpan = styled.span`
  position: absolute;
  color: ${(props) => props.theme.color.__line_contents};
`;

const StProfileContainer = styled.div`
  padding-bottom: 76px;
`;
const StProfileWriterBox = styled.div`
  width: 700px;
  margin: 0 auto;
`;
const StProfileWriterUserIntroBox = styled.div`
  width: 700px;
  margin: 0 auto;
`;
const StProfileDiv = styled.div`
  border: 1px solid #eee;
  background-color: #fff;
`;
const StProfileTextarea = styled.textarea`
  padding: 15px 20px 13px;
  resize: none;
  width: 100%;
  outline: none;
`;
const StProfileWriterUserBox = styled.div`
  margin-top: 57px;
  padding-bottom: 16px;
`;
const StProfileWriterInfoBox = styled.div`
  margin-top: 37px;
  padding-bottom: 13px;
`;
const StProfileUserInfoBox = styled.div`
  border: 1px solid #eee;
`;
const StProfileTipDiv = styled.div`
  padding-top: 17px;
`;
const StProfileTipSpan = styled.span`
  border: 1px solid #00c3bd;
  border-radius: 8px;
  color: ${(props) => props.theme.color.__line_contents};
  float: left;
  font-size: 10px;
  line-height: 15px;
  margin: 4px 6px 0 0;
  padding: 0 4px;
`;
const StProfileTipP = styled.p`
  color: ${(props) => props.theme.color.__text_caption_1};
  font-size: 12px;
  line-height: 20px;

  overflow: hidden;
`;
const StProfileBtnDiv = styled.div`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 24px;
`;
const StProfileBtnClose = styled.button`
  margin: 0 4px;
  width: 80px;
  border: 1px solid #bbb;
  border-radius: 20px;
  color: #666666;
  height: 32px;
  background-color: #ffffff;
  min-width: 80px;
  cursor: pointer;
`;
const StProfileBtnSave = styled.button`
  margin: 0 4px;
  width: 80px;
  color: ${(props) => props.theme.color.__line_contents};
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.color.__line_contents};
  min-width: 80px;
  background-color: #ffffff;
  height: 32px;
  cursor: pointer;
`;
export {
  StNavigatorDiv,
  StNavigatorImg,
  StNavigatorInput,
  StProfileH3,
  StProfileUserInfoBox,
  StNavigatorSpan,
  StProfileTipP,
  StProfileTipSpan,
  StProfileTipDiv,
  StProfileSpan,
  StProfileContainer,
  StProfileWriterBox,
  StProfileTextarea,
  StProfileDiv,
  StProfileWriterInfoBox,
  StProfileWriterUserBox,
  StProfileBtnDiv,
  StProfileBtnClose,
  StProfileBtnSave,
};
