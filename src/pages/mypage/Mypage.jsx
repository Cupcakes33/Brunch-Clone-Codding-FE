import styled from "styled-components";
import {
  StNavigatorDiv,
  StNavigatorImg,
  StNavigatorInput,
  StProfileUserTextarea,
  StProfileUserInfoBox,
  StNavigatorSpan,
  StProfileTipP,
  StProfileTipSpan,
  StProfileTipDiv,
  StProfileDiv,
  StProfileH3,
  StProfileSpan,
  StProfileContainer,
  StProfileTextarea,
  StProfileWriterBox,
  StProfileWriterInfoBox,
  StProfileWriterUserBox,
  StProfileBtnDiv,
  StProfileBtnClose,
  StProfileBtnSave,
} from "./style";
import { useRef } from "react";
import img1 from "../../image/1.jpg";
const Mypage = () => {
  const imageInput = useRef();
  const onclickImageUpload = () => {
    imageInput.current.click();
  };
  return (
    <div>
      <StNavigatorDiv>
        <div>
          <StNavigatorImg src={img1} />
          <form>
            <StNavigatorSpan onClick={onclickImageUpload}>
              <StNavigatorInput type="file" ref={imageInput} />
            </StNavigatorSpan>
          </form>
        </div>
      </StNavigatorDiv>
      <StProfileContainer>
        <form>
          <StProfileWriterBox>
            <StProfileWriterInfoBox>
              <StProfileH3>
                작가명<StProfileSpan>*</StProfileSpan>
              </StProfileH3>
            </StProfileWriterInfoBox>
            <StProfileUserInfoBox>
              <StProfileUserTextarea placeholder="이름을 입력해주세요"></StProfileUserTextarea>
            </StProfileUserInfoBox>
          </StProfileWriterBox>
          <StProfileWriterBox>
            <StProfileWriterUserBox>
              <StProfileH3>
                소개<StProfileSpan>*</StProfileSpan>
              </StProfileH3>
            </StProfileWriterUserBox>
            <StProfileDiv>
              <StProfileTextarea placeholder="간단한 소개를 입력해주세요."></StProfileTextarea>
            </StProfileDiv>
            <StProfileTipDiv>
              <StProfileTipSpan>TIP</StProfileTipSpan>
              <StProfileTipP>
                작가 소개에 포함되는 내용은 포털 검색 등을 통해 외부에 공개되는
                정보이므로
                <br></br>
                작성 시 불필요한 개인정보가 포함되지 않도록 주의가 필요합니다.
              </StProfileTipP>
            </StProfileTipDiv>
            <StProfileBtnDiv>
              <StProfileBtnClose>취소하기</StProfileBtnClose>
              <StProfileBtnSave>저장하기</StProfileBtnSave>
            </StProfileBtnDiv>
          </StProfileWriterBox>
        </form>
      </StProfileContainer>
    </div>
  );
};
export default Mypage;
