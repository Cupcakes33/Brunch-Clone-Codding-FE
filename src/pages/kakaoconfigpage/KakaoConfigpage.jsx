import img1 from "../../image/1.jpg";
import styled from "styled-components";
import {
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
} from "./style";
const KakaoConfigpage = () => {
  return (
    <StEditSettingDiv>
      <StSetInfoSnsInfoDiv>
        <StSetInfoSnsInfoStrong>
          <StSetInfoSnsInfoLabel>계정</StSetInfoSnsInfoLabel>
        </StSetInfoSnsInfoStrong>
        <StContentInfoDiv>
          <StContentInfoTextInputDiv>
            <StContentInfoTextKakaoIconSpan></StContentInfoTextKakaoIconSpan>
            <StContentInfoTextAcountSpan>
              hyeminpak@kakao.com
            </StContentInfoTextAcountSpan>
          </StContentInfoTextInputDiv>
          <StContentInfoButtonDiv>
            <StContentInfoButtonA>카카오계정관리</StContentInfoButtonA>
          </StContentInfoButtonDiv>
        </StContentInfoDiv>
      </StSetInfoSnsInfoDiv>
      <StSetInfoProfileDiv>
        <StSetInfoProfileH3>프로필</StSetInfoProfileH3>
        <StSetInfoProfileImgDiv>
          <StSetInfoProfileImg src={img1} />
        </StSetInfoProfileImgDiv>
        <StSetInfoProfileStrong>혜민</StSetInfoProfileStrong>
        <StSetInfoProfileP>혜민의 브런치입니다.</StSetInfoProfileP>
        <StSetInfoProfileButtonDiv>
          <StSetInfoProfileButtonA>프로필편집</StSetInfoProfileButtonA>
        </StSetInfoProfileButtonDiv>
      </StSetInfoProfileDiv>
      <StSetInfoEmailDiv>
        <StSetInfoEmailH3>
          연락처 이메일
          <StSetInfoEmailSpan>
            카카오계정 메일보다 더 자주 사용하는 메일 주소가 있다면 연락처
            이메일을 설정해보세요.
          </StSetInfoEmailSpan>
        </StSetInfoEmailH3>
        <div>
          <div>
            <button>연락처 이메일 설정</button>
          </div>
        </div>
      </StSetInfoEmailDiv>
      <div></div>
    </StEditSettingDiv>
  );
};
export default KakaoConfigpage;
