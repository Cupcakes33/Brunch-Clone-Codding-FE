import styled from "styled-components";
import kakaologo from "../../styles/img/logo_kakao.png";

const StSpan = styled.span`
  display: block;
  text-align: center;
  margin: 0 auto;
  background-image: url(${kakaologo});
  width: 88px;
  height: 27px;
  background-size: 100px 80px;
  margin-top: 10%;
`;
const StForm = styled.form`
  margin: 20px auto;
  position: relative;
  padding: 55px 0 50px;
  height: 100%;
  width: 100%;
`;
const StInput = styled.input`
  width: 100%;
  height: 45px;
  font-size: ${(props) => props.theme.font.base};
  border: solid #ccc;
  border-width: 0 0 2px;
`;
const StSubmitButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: #fee500;
  border-radius: 4px;
  font-size: ${(props) => props.theme.font.base};
  font-weight: ${(props) => props.theme.fontWeight.reguler};
  margin-top: 40px;
  text-align: center;
`;
const StP = styled.p`
  color: red;
  font-size: ${(props) => props.theme.font.small};
`;
export { StSpan, StForm, StInput, StSubmitButton, StP };
