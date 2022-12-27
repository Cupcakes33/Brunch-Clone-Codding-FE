import styled from "styled-components";
import CommonButton from "../../components/common/CommonButton";
import CommonBox from "../../components/common/CommonBox";
import jpeg from "../../../src/styles/img/o.jpeg";
import { StSecessionH2Div } from "./style";
const Secession = () => {
  return (
    <>
      <CommonBox
        flexDirection={"column"}
        width={"460px"}
        top={"20%"}
        margin={"0 auto"}
      >
        <StSecessionH2Div>브런치 탈퇴하기</StSecessionH2Div>
        <CommonBox>
          탈퇴하시면 이용 중인 브런치가 폐쇄되며,{" "}
          <b>모든 데이터는 복구가 불가능합니다.</b>
          <br></br> 아래 사항을 확인하신 후에 신중하게 결정해 주세요.
        </CommonBox>
        <CommonBox></CommonBox>
        <CommonBox></CommonBox>
      </CommonBox>
    </>
  );
};
export default Secession;
