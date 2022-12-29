import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postItem } from "../../redux/slices/postSlice";
import useInputItem from "../../hooks/useInputItem";
import PostNav from "../../components/navLayout/Nav/PostNav";
import { MdOutlineDeleteForever } from "react-icons/md";

import { TfiImage, TfiLayoutPlaceholder } from "react-icons/tfi";
import CommonButton from "../../components/common/CommonButton";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const imgRef = useRef(null);
  const { input, onChangeHandler, reset } = useInputItem();

  const dispatch = useDispatch();
  const [fileimage, setFileImage] = useState("");

  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileimage);
    setFileImage("");
  };

  // const removeImage = (id) => {
  //   let newList = imageList.filter((image) => image.id !== id);
  //   getImageList(newList);
  //   return;
  // };

  const onsubmitHandler = (e) => {
    const formData = new FormData();
    const { title, subtitle, content } = input;

    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("content", content);
    formData.append("image", fileimage);

    dispatch(postItem(formData));
    reset();
    navigate("/");
  };

  const imgUploadBtnHandler = () => {
    if (!imgRef.current) {
      return;
    }
    imgRef.current.click();
  };

  return (
    <>
      <PostNav />
      <StContainer>
        <StTitle>
          {fileimage && <Stimage src={fileimage}></Stimage>}
          <StInputDiv>
            <StTitleInput
              type="text"
              name="title"
              value={input.title}
              placeholder="제목을 입력하세요"
              onChange={onChangeHandler}
            ></StTitleInput>
            <StSubTitleInput
              type="text"
              name="subtitle"
              value={input.subtitle}
              placeholder="소제목을 입력하세요"
              onChange={onChangeHandler}
            />

            <StPostLogo>
              <div></div>
              <StImgInput
                name="coverimage"
                type="file"
                accept="image/*"
                onChange={saveFileImage}
                ref={imgRef}
              />
            </StPostLogo>
            <div
              style={{
                position: "absolute",
                right: "0",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StImgUploadBtn>
                <TfiImage onClick={imgUploadBtnHandler} />
              </StImgUploadBtn>
              <StDelImg>
                <TfiLayoutPlaceholder onClick={deleteFileImage} />
              </StDelImg>
            </div>
          </StInputDiv>
        </StTitle>
        <StPost>
          <StSubmitBtn onClick={onsubmitHandler}>발행하기</StSubmitBtn>
          <StContent>
            <StContentInput
              type="text"
              name="content"
              value={input.content}
              onChange={onChangeHandler}
            />
          </StContent>
        </StPost>
      </StContainer>
    </>
  );
};

export default Post;

const StPost = styled.div`
  width: 100%;
  margin-top: 100px auto;
`;

const StTitle = styled.div`
  height: 480px;
  width: 100%;
  border-bottom: 1px solid #6666;

  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;
  z-index: 1;
`;

const StTitleInput = styled.input`
  width: 700px;
  outline: none;
  height: 50px;
  font-size: xx-large;
  position: absolute;
  color: black;
  bottom: 120px;
  background: transparent;
  mix-blend-mode: difference;
`;

const StSubTitleInput = styled.input`
  width: 700px;
  outline: none;
  height: 30px;
  position: absolute;
  background: transparent;
  bottom: 90px;
  color: black;
`;

const StContent = styled.div`
  width: 700px;
  height: 100%;

  margin: 0 auto;
`;

const StContentInput = styled.textarea`
  width: 700px;
  outline: none;
  height: 800px;
  line-height: 20px;
  word-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
  resize: none;
`;

const StImgInput = styled.input`
  display: none;
`;

const StDelImg = styled.div`
  width: 25px;
  height: 25px;
  font-size: 25px;
  cursor: pointer;
`;

const StPostLogo = styled.div`
  margin-left: 1200px;
`;

const Stimage = styled.img`
  width: 100%;
  height: 480px;

  object-fit: fill;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;

  z-index: 3;
`;

const StInputDiv = styled.div`
  width: 700px;
  height: 450px;
  margin: 150px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 3;
  left: 50vw;
  top: 25%;
`;

const StImgUploadBtn = styled.button`
  width: 25px;
  height: 25px;
  font-size: 25px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    flex: none;
  }
`;
const StContainer = styled.div``;

const StSubmitBtn = styled(CommonButton)`
  position: fixed;
  bottom: 100px;
  right: 200px;
`;
