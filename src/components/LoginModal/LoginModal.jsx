import styled, { css } from "styled-components";
import Modal from "../Modal/Modal";
import Carousel from "../common/Carousel";
import { ItemKakaoLogo, ItemLogoIcon, ItemLogo } from "../navLayout/imgItems";
import axios from "axios";

const LoginModal = ({ onClose }) => {
  const LoginSubmitHandler = (event) => {
    event.preventDefault();
  };

  const kakaoLoginBtnHandler = () => {
    axios.get("https://brunchclone.shop/auth/kakao");
  };
  return (
    <Modal onClose={onClose}>
      <StLoginModalSection leftSection>
        <ItemLogoIcon />
        {/* 이 부분 수정할 것 */}
        <div
          style={{
            width: "500px",
            height: "300px",
            position: "absolute",
            left: "0px",
          }}
        >
          <Carousel />
        </div>
      </StLoginModalSection>
      <StLoginModalSection>
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
          <button onClick={kakaoLoginBtnHandler}>
            <ItemKakaoLogo />
            <span>카카오계정으로 시작하기</span>
          </button>
        </StKakaoLoginWrapper>
      </StLoginModalSection>
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

const StLoginModalSection = styled.div`
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
