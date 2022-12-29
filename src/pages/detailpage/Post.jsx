import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postItem } from "../../redux/slices/postSlice";
import useInputItem from "../../hooks/useInputItem";
import PostNav from "../../components/navLayout/Nav/PostNav";

const Post = () => {
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

  const dataURItoBlob = (dataURI) => {
    const splitDataURI = dataURI.split(",");
    const byteString =
      splitDataURI[0].indexOf("base64") >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(":")[1].split(";")[0];
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);
    return new Blob([ia], { type: mimeString });
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
    formData.append("coverimage", fileimage);
    dispatch(postItem(formData));

    console.log(title, subtitle, content, formData);

    reset();
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
              <div>
                <StDelImg>
                  <button onClick={() => deleteFileImage()}>삭제</button>
                </StDelImg>
              </div>
              <StImgInput
                name="coverimage"
                type="file"
                accept="image/*"
                onChange={saveFileImage}
              />
            </StPostLogo>
          </StInputDiv>
        </StTitle>
        <StPost>
          <button onClick={() => onsubmitHandler()}>작성하기</button>
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

const StDelImg = styled.div`
  position: absolute;
  top: 50%;
`;
////////

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
