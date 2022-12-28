import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postItem } from "../../redux/slices/postSlice";
import useInputItem from "../../hooks/useInputItem";
import style from "./style";

const Post = () => {
  const { input, onChangeHandler, reset } = useInputItem();

  const dispatch = useDispatch();
  const [coverimage, setCoverimage] = useState("");

  // const removeImage = (id) => {
  //   let newList = imageList.filter((image) => image.id !== id);
  //   getImageList(newList);
  //   return;
  // };

  const onsubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    const { title, subtitle, content } = input;
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("content", content);
    formData.append("coverimage", coverimage);
    dispatch(postItem(formData));
  };

  const [subtitle, setSubtitle] = useState("");
  const onChangeSubtitle = (e) => {
    e.preventDefault();
    setSubtitle(e.target.value);
  };

  const [content, setContent] = useState("");
  const onChangeContent = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(coverimage);
    setCoverimage("");
  };

  return (
    <>
      <StContainer onSubmit={onChangeHandler}>
        <StTitle>
          {coverimage && <Stimage src={coverimage}></Stimage>}
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
              value={subtitle}
              placeholder="소제목을 입력하세요"
              onChange={onChangeHandler}
            />

            <StPostLogo>
              <div>
                <StDelImg>
                  <button onClick={() => deleteFileImage()}>삭제</button>
                </StDelImg>
              </div>
              <StImgInput
                name="coverimage"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setCoverimage(e.target.files[0]);
                }}
              />
            </StPostLogo>
          </StInputDiv>
        </StTitle>
        <StPost>
          <button onClick={() => onsubmitHandler()}></button>
          <StContent>
            <StContentInput
              type="text"
              name="content"
              value={content}
              onChange={onChangeContent}
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
  color: white;
`;

const StContent = styled.div`
  width: 700px;
  height: 100%;

  margin: 0 auto;
`;

const StContentInput = styled.input`
  width: 700px;
  outline: none;
  height: 800px;
  line-height: 50px;
  border: 1px solid black;
  word-break: break-all;
`;

const StImgInput = styled.input`
  position: absolute;
  top: 30%;
`;

const StDelImg = styled.button`
  position: absolute;
  top: 50%;
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

const StContainer = styled.div``;
