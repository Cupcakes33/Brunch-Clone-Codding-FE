import styled from "styled-components";
import {
  StNavigatorDiv,
  StNavigatorImg,
  StNavigatorInput,
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
import { useEffect, useRef, useState } from "react";
import img1 from "../../image/1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, updateUserInfoData } from "../../redux/slices/loginSlice";
import CommonBox from "../../components/common/CommonBox";
import { useNavigate } from "react-router-dom";
import PostNav from "../../components/navLayout/Nav/PostNav";
const Mypage = () => {
  const imageInput = useRef();
  const onclickImageUpload = () => {
    imageInput.current.click();
  };
  const { userId, writer, profileImage, selfIntro } = useSelector(
    (state) => state.login.userInfo
  );

  const [userForm, setUserForm] = useState({
    userId,
    writer,
    profileImage: null,
    selfIntro,
  });
  const onChangeMypageInputHandler = (event) => {
    const { name, value } = event.target;
    setUserForm((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const configNav = useNavigate();
  const dispatch = useDispatch();
  const onClickUserInfoDataHandler = (e) => {
    dispatch(updateUserInfoData(userForm));
    configNav("/config");
  };
  const onClickUserInfoCancelBtn = () => {
    configNav("/config");
  };
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);
  useEffect(() => {
    setUserForm({
      userId,
      writer,
      profileImage,
      selfIntro,
    });
  }, [userId, writer, profileImage, selfIntro]);
  return (
    <div>
      <PostNav />
      <StNavigatorDiv>
        <CommonBox
          width={"100px"}
          marginLeft={"250px"}
          left={"50%"}
          position={"absolute"}
          bottom={"-50px"}
          height={"100px"}
        >
          <StNavigatorImg src={img1} />
          <form>
            <StNavigatorSpan onClick={onclickImageUpload}>
              <StNavigatorInput type="file" ref={imageInput} />
            </StNavigatorSpan>
          </form>
        </CommonBox>
      </StNavigatorDiv>
      <StProfileContainer>
        <form onSubmit={(event) => event.preventDefault()}>
          <StProfileWriterBox>
            <StProfileWriterInfoBox>
              <StProfileH3>
                ?????????<StProfileSpan>*</StProfileSpan>
              </StProfileH3>
            </StProfileWriterInfoBox>
            <StProfileUserInfoBox>
              <StProfileTextarea
                placeholder="????????? ??????????????????"
                name="writer"
                onChange={onChangeMypageInputHandler}
                value={userForm.writer}
              ></StProfileTextarea>
            </StProfileUserInfoBox>
          </StProfileWriterBox>
          <StProfileWriterBox>
            <StProfileWriterUserBox>
              <StProfileH3>
                ??????<StProfileSpan>*</StProfileSpan>
              </StProfileH3>
            </StProfileWriterUserBox>
            <StProfileDiv>
              <StProfileTextarea
                name="selfIntro"
                placeholder="????????? ????????? ??????????????????."
                onChange={onChangeMypageInputHandler}
                value={userForm.selfIntro === null ? "" : userForm.selfIntro}
              ></StProfileTextarea>
            </StProfileDiv>
            <StProfileTipDiv>
              <StProfileTipSpan>TIP</StProfileTipSpan>
              <StProfileTipP>
                ?????? ????????? ???????????? ????????? ?????? ?????? ?????? ?????? ????????? ????????????
                ???????????????
                <br></br>
                ?????? ??? ???????????? ??????????????? ???????????? ????????? ????????? ???????????????.
              </StProfileTipP>
            </StProfileTipDiv>
            <StProfileBtnDiv>
              <StProfileBtnClose onClick={onClickUserInfoCancelBtn}>
                ????????????
              </StProfileBtnClose>
              <StProfileBtnSave onClick={onClickUserInfoDataHandler}>
                ????????????
              </StProfileBtnSave>
            </StProfileBtnDiv>
          </StProfileWriterBox>
        </form>
      </StProfileContainer>
    </div>
  );
};
export default Mypage;
