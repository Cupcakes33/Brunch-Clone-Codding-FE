import React from "react";
import { useState } from "react";
import styled from "styled-components";
import style from "./style";

const Post = () => {
  const [title, setTitle] = useState("");
  const [fileimage, setFileimage] = useState("");

  // const removeImage = (id) => {
  //   let newList = imageList.filter((image) => image.id !== id);
  //   getImageList(newList);
  //   return;
  // };

  const onChangeTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
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

  const saveFileimage = (e) => {
    setFileimage(URL.createObjectURL(e.target.files[0]));
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(fileimage);
    setFileimage("");
  };

  return (
    <>
      <StTitle>
        {fileimage && <Stimage src={fileimage}></Stimage>}
        <StInputDiv>
          <StTitleInput
            type="text"
            name="content"
            value={title}
            placeholder="제목을 입력하세요"
            onChange={onChangeTitle}
          ></StTitleInput>
          <StSubTitleInput
            type="text"
            name="content"
            value={subtitle}
            placeholder="소제목을 입력하세요"
            onChange={onChangeSubtitle}
          />

          <StPostLogo>
            <div>
              <StDelImg>
                <button onClick={() => deleteFileImage()}>삭제</button>
              </StDelImg>
            </div>
            <StImgInput
              name="imgUpload"
              type="file"
              accept="image/*"
              onChange={saveFileimage}
            />
          </StPostLogo>
        </StInputDiv>
      </StTitle>
      <StPost>
        <StContent>
          <StContentInput
            type="text"
            name="content"
            value={content}
            onChange={onChangeContent}
          />
        </StContent>
      </StPost>
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
  height: 300px;

  margin: 0 auto;
`;

const StContentInput = styled.input`
  width: 700px;
  outline: none;
  height: 30px;
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
  height: 450px;

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
