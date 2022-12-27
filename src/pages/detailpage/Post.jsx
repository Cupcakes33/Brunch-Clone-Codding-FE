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
      <StPost>
        <StTitle>
          <StInputDiv>
            <StTitleInput
              type="text"
              name="content"
              value={title}
              onChange={onChangeTitle}
            ></StTitleInput>
            <StSubTitleInput
              type="text"
              name="content"
              value={subtitle}
              onChange={onChangeSubtitle}
            />
          </StInputDiv>
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
        </StTitle>
        <StContent>
          <StContentInput
            type="text"
            name="content"
            value={content}
            onChange={onChangeContent}
          />
        </StContent>
      </StPost>
      {fileimage && <Stimage src={fileimage}></Stimage>}
    </>
  );
};

export default Post;

const StPost = styled.div`
  width: 100%;
  border: 1px solid blue;
`;

const StTitle = styled.div`
  height: 450px;
  width: 100%;
  border: 1px solid black;
  margin: 0 auto;
`;

const StTitleInput = styled.input`
  width: 700px;
  border: 1px solid black;
  height: 50px;
  font-size: xx-large;
  position: absolute;
  bottom: 120px;
`;

const StSubTitleInput = styled.input`
  width: 700px;
  border: 1px solid black;
  height: 30px;
  position: absolute;
  bottom: 90px;
`;

const StContent = styled.div`
  width: 700px;
  height: 300px;
  border: 1px solid green;
  margin: 0 auto;
`;

const StContentInput = styled.input`
  width: 700px;
  border: 1px solid black;
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
  width: 200px;
  height: 200px;

  border: 1px solid red;
`;

const StInputDiv = styled.div`
  border: 1px solid red;
  width: 700px;
  height: 450px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
