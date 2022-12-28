import img1 from "../../image/1.jpg";
import CommonButton from "../../components/common/CommonButton";
import CommonBox from "../../components/common/CommonBox";
import styled from "styled-components";
import {
  StEmailIconSpan,
  StStrong,
  StProfileImg,
  StUserStrong,
  StUserP,
  StProfileDiv,
  StSpan,
  StEmailButton,
  StEventDiv,
  StCheckboxSpan,
  StA,
} from "./style";
import { useState } from "react";
const KakaoConfigpage = () => {
  const [checkEvent, setCheckEvent] = useState(false);
  const checkboxEvent = (e) => {
    if (e.target.checked) {
      setCheckEvent(!checkEvent);
    } else {
      setCheckEvent(!checkEvent);
    }
  };

  return (
    <>
      <CommonBox
        margin={"103px auto 0"}
        width={"700px"}
        display={"block"}
        position={"relative"}
      >
        <CommonBox
          margin={"47px 0 47px"}
          flexDirection={"column"}
          borderBottom={`1px solid #eee`}
          paddingBottom={"47px"}
        >
          <StStrong>계정</StStrong>
          <CommonBox margin={"12px 0px"}>
            <StEmailIconSpan />
            <StSpan> hyemin@kakao.com</StSpan>
            <StEmailButton>카카오 계정 관리</StEmailButton>
          </CommonBox>
        </CommonBox>
        <CommonBox
          borderBottom={`1px solid #eee`}
          margin={"47px 0 47px"}
          flexDirection={"column"}
          paddingBottom={"32px"}
        >
          <StStrong>프로필</StStrong>
          <StProfileImg src={img1} />
          <StUserStrong>혜민</StUserStrong>
          <StUserP>혜민의 브런치입니다.</StUserP>
          <StProfileDiv>
            <CommonButton
              colorType={"contents"}
              style={{ float: "right", width: "116px" }}
            >
              프로필 편집
            </CommonButton>
          </StProfileDiv>
        </CommonBox>
        <CommonBox
          borderBottom={`1px solid #eee`}
          margin={"47px 0 47px"}
          paddingBottom={"31px"}
        >
          <StStrong>연락처 이메일</StStrong>
          <StSpan>
            카카오계정 메일보다 더 자주 사용하는 메일 주소가 있다면 연락처
            이메일을 설정해보세요.
          </StSpan>
          <StEmailButton>연락처 이메일 설정</StEmailButton>
        </CommonBox>
        <CommonBox
          borderBottom={`1px solid #eee`}
          flexDirection={"column"}
          margin={"47px 0 47px"}
        >
          <StStrong>이벤트 및 광고성 정보 수신</StStrong>
          <StEventDiv>
            <input type="checkbox" onClick={(e) => checkboxEvent(e)} />
            <StSpan>
              브런치에서 진행하는 이벤트, 프로모션에 관한 광고를 수신하겠습니다.
            </StSpan>
            {checkEvent === true && (
              <StCheckboxSpan>
                2022.12.26 브런치 이벤트 정보 수신 철회
              </StCheckboxSpan>
            )}
          </StEventDiv>
        </CommonBox>
        <CommonBox>
          <StA>탈퇴하기</StA>
        </CommonBox>
      </CommonBox>
    </>
  );
};
export default KakaoConfigpage;
