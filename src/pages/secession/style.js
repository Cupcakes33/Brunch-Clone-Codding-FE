import styled from "styled-components";
import iconImg from "../../styles/img/icons.png";
import spriteImg from "../../styles/img/spriteImg.png";

const StH2Div = styled.div`
  font-size: ${(props) => props.theme.font.lg};
  margin: 15% auto 5%;
`;
const StCloseButton = styled.button`
  background-image: url(${iconImg});
  width: 20px;
  height: 20px;
  background-position: -90px 0px;
  background-color: #ffffff;
  position: absolute;
  right: 30px;
`;

const StDescDiv = styled.div`
  font-size: 0.9rem;
  text-align: center;
`;
const StDescB = styled.b`
  font-size: 0.9rem;
  font-weight: bold;
`;
const StUl = styled.ul`
  padding-bottom: 17px;
  list-style-type: square;
`;
const StLi = styled.li`
  font-size: 0.8rem;
  margin-top: 10px;
  color: #898989;
`;
const StA = styled.a`
  position: relative;
  padding-top: 14px;
`;

const ISpanIcon = styled.span`
  background-image: url(${spriteImg});
  width: 14px;
  height: 9px;
  background-position: -350px 0;
  background-size: 200px 840px;
  position: absolute;
  right: 0;
  top: 22px;
  cursor: pointer;
`;
const StLiDesc = styled.li`
  font-size: 0.8rem;
  margin-top: 10px;
  color: #898989;
`;
const StButtonA = styled.a`
  text-decoration: underline;
  font-size: 0.8rem;
`;
const StInput = styled.input`
  margin-right: 10px;
`;
const StP = styled.p`
  font-size: ${(props) => props.theme.font.small};
`;
const StForm = styled.form`
  margin: 0 auto;
`;
const StButton = styled.button`
  width: 144px;
  height: 44px;
  border-radius: 22px;
  border: 1px solid #00c3bd;
  color: ${(props) => props.theme.color.__line_contents};
  background-color: #ffffff;
  margin-top: 31px;
  margin: 31px auto;
`;
export {
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
};
