import styled from "styled-components";
import CommonButton from "../../components/common/CommonButton";
import CommonBox from "../../components/common/CommonBox";
import jpeg from "../../../src/styles/img/o.jpeg";
import {
  StH2Div,
  StCloseButton,
  StDescDiv,
  StDescB,
  StUl,
  StLi,
  StA,
  ISpanIcon,
  StLiDesc,
  StButtonA,
  StForm,
  StInput,
  StP,
  StButton,
} from "./style";
import { useState } from "react";
const Secession = () => {
  const [desc, setDesc] = useState(false);
  const descEventHandler = () => {
    if (desc) {
      setDesc(!desc);
    } else {
      setDesc(!desc);
    }
  };
  return (
    <>
      <StCloseButton />
      <CommonBox
        flexDirection={"column"}
        width={"460px"}
        top={"20%"}
        margin={"10% auto"}
      >
        <StH2Div>브런치 탈퇴하기</StH2Div>
        <StDescDiv>
          탈퇴하시면 이용 중인 브런치가 폐쇄되며,{" "}
          <StDescB>모든 데이터는 복구가 불가능합니다.</StDescB>
          <br></br> 아래 사항을 확인하신 후에 신중하게 결정해 주세요.
        </StDescDiv>
        <CommonBox
          border={"1px solid #ccc"}
          backgroundColor={"#fdfdfd"}
          border={"1px solid #dfdfdf"}
          margin={"35px auto 24px"}
          width={"460px"}
          textAlign={"left"}
          padding={"20px"}
          flexDirection={"column"}
        >
          <StUl>
            <StLi>글, 매거진, 프로필 등 모든 정보가 삭제됩니다.</StLi>
            <StLi>타인 글의 댓글은 삭제되지 않으니 미리 확인하세요.</StLi>
            <StLi>탈퇴 후에는 글 자료 신청이 불가능합니다.</StLi>
          </StUl>
          <StA textAlign={"left"}>
            글 자료 신청보기
            <ISpanIcon onClick={(e) => descEventHandler()} />
          </StA>

          {desc === true && (
            <StUl>
              <StLiDesc>
                탈퇴 전 글 자료 신청을 하시면, 그동안 브런치에 작성하신 글을
                이메일로 전달해 드립니다.
              </StLiDesc>
              <StLiDesc>
                신청 시, 글 자료 메일 발송 전까지 탈퇴가 불가능합니다.{" "}
              </StLiDesc>
              <StLiDesc>
                글 자료 메일을 받으신 분은 반드시 다운로드하여 확인하신 후
                탈퇴를 진행해 주세요. 탈퇴 즉시 모든 자료는 파기되어 전송/
                재전송 및 다운로드가 불가능합니다.
              </StLiDesc>
              <StButtonA>글 자료 신청하기</StButtonA>
            </StUl>
          )}
        </CommonBox>
        <StForm>
          <CommonBox display={"flex"}>
            <StInput type="checkbox" />
            <StP>안내사항을 모두 확인하였으며, 이에 동의합니다.</StP>
          </CommonBox>
          <CommonBox>
            <StButton colorType={"contents"} width={"144px"}>
              탈퇴하기
            </StButton>
          </CommonBox>
        </StForm>
      </CommonBox>
    </>
  );
};
export default Secession;
