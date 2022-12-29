import CommonBox from "../../components/common/CommonBox";
import styled from "styled-components";
import { StSpan, StForm, StInput, StSubmitButton, StP } from "./style";
import { useEffect, useState } from "react";
import { addUserInfo } from "../../redux/slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isFulfilled } from "@reduxjs/toolkit";

const Signup = () => {
  const [signForm, setSignForm] = useState({
    writer: "",
    email: "",
    password: "",
  });
  const [isCheck, setIsCheck] = useState({
    iswriter: false,
    isEmail: false,
    isPassword: false,
  });
  const nav = useNavigate();
    const dispatch = useDispatch();
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setSignForm((prev) => {
      return { ...prev, [name]: value };
    });

    // const writerRegExp = /^[a-zA-z0-9]{3,12}$/;
    
    const submitOnclickHandler = () => {
      dispatch(addUserInfo(signForm)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          alert("회원가입성공");
          nav("/now");
        } else {
          alert("회원가입실패");
        }
      });
      setSignForm({
        writer: "",
        email: "",
        password: "",
      });
    };
    return (
      <div>
        <StSpan />
        <CommonBox
          width={"580px"}
          padding={"0 69px"}
          border={"1px solid rgba(0,0,0,.12)"}
          margin={"42px auto 40px"}
        >
          <StForm onSubmit={(e) => e.preventDefault()}>
            <CommonBox marginTop={"10px"} flexDirection={"column"}>
              <StInput
                name="writer"
                placeholder="닉네임"
                value={signForm.writer}
                onChange={(event) => inputHandler(event)}
              />

              {/* {isCheck.iswriter || <StP>입력한 값을 확인하세요</StP>} */}
            </CommonBox>
            <CommonBox marginTop={"10px"} flexDirection={"column"}>
              <StInput
                name="email"
                placeholder="이메일"
                value={signForm.email}
                onChange={(event) => inputHandler(event)}
              />
              {/* {isCheck.isEmail || <StP>입력한 값을 확인하세요</StP>} */}
            </CommonBox>
            <CommonBox marginTop={"10px"} flexDirection={"column"}>
              <StInput
                name="password"
                type="password"
                placeholder="비밀번호"
                value={signForm.password}
                onChange={(event) => inputHandler(event)}
              />

              {/* {isCheck.isPassword || <StP>입력한 값을 확인하세요</StP>} */}
            </CommonBox>
            <StSubmitButton onClick={() => submitOnclickHandler()}>
              가입하기
            </StSubmitButton>
          </StForm>
        </CommonBox>
      </div>
    );
  };
};

export default Signup;
