import styled, { css } from "styled-components";
import CommonBox from "../common/CommonBox";
import Modal from "../Modal/Modal";
import { ItemKakaoLogo, ItemLogoIcon, ItemLogo } from "../navLayout/imgItems";

const LoginModal = ({ onClose }) => {
  const LoginSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Modal onClose={onClose}>
      <LoginModalSection leftSection>
        <ItemLogoIcon />
      </LoginModalSection>
      <LoginModalSection>
        <StLoginForm onSubmit={LoginSubmitHandler}>
          <h2>브런치 시작하기</h2>
          <div>
            <p>이메일</p>
            <input type="email" />
          </div>
          <div>
            <p>비밀번호</p>
            <input type="password" />
          </div>
          <button>
            <ItemLogo />
            <span>이메일 주소로 시작하기</span>
          </button>
        </StLoginForm>
        <StKakaoLoginWrapper>
          <button>
            <ItemKakaoLogo />
            <span>카카오계정으로 시작하기</span>
          </button>
        </StKakaoLoginWrapper>
      </LoginModalSection>
    </Modal>
  );
};

const LoginModalBoxLayout = css`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.font.base};
  gap: 10px;
`;

const LoginModalSection = styled.div`
  width: 50%;
  height: 100%;
  flex-direction: column;
  padding: 74px 47px 72px 47px;
  ${(props) =>
    props.leftSection &&
    css`
      background: white;
    `}
`;

const StLoginForm = styled.form`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e7e7e7;
  gap: 10px;
  input,
  button {
    ${LoginModalBoxLayout}
  }
  input {
    padding: 20px;
    outline: none;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px palevioletred;
      transition: box-shadow 0.15s ease-in-out;
    }
  }
  button {
    margin-top: 15px;
    cursor: pointer;
  }
`;

const StKakaoLoginWrapper = styled.div`
  width: 100%;
  height: 30%;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;

  button {
    ${LoginModalBoxLayout}
    background: #ffe500;
    cursor: pointer;
  }
`;

export default LoginModal;
