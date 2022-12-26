import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Post = () => {
  const [title, setTitle] = useState("");
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

  return (
    <>
      <StPost>
        <StTitle>
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
    </>
  );
};

export default Post;

const StPost = styled.div`
  width: 700px;
  border: 1px solid blue;
  margin: 0 auto;
`;

const StTitle = styled.div`
  height: 450px;
  width: 400px;
  border: 1px solid black;
  margin: 0 auto;
`;

const StTitleInput = styled.input`
  width: 400px;
  border: 1px solid black;
  height: 50px;
  position: absolute;
  top: 35%;
  font-size: xx-large;
`;

const StSubTitleInput = styled.input`
  width: 400px;
  border: 1px solid black;
  height: 30px;
  position: absolute;
  top: 50%;
`;

const StContent = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid green;
  margin: 0 auto;
`;

const StContentInput = styled.input`
  width: 400px;
  border: 1px solid black;
  height: 30px;
  position: absolute;
  top: 60%;
`;
