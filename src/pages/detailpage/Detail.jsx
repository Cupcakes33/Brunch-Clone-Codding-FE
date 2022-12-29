import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DetailNav from "../../components/navLayout/Nav/DetailNav";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getResult } from "../../redux/slices/detailSlice";
import CommentForm from "./CommentForm";

const Detail = () => {
  const { postid } = useParams();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { isLoading, detail } = useSelector((state) => state.detailReducer);

  const item = detail?.result;
  console.log("item", item);

  useEffect(() => {
    dispatch(__getResult(postid));
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩중....</div>;
  }

  return (
    <>
      <DetailNav itemList={item} />
      <DetailWrap>
        <StImg src={item?.coverImage} />
        <StTitle>{item?.title}</StTitle>
        <StSubTitle>{item?.subtitle}</StSubTitle>
        <StName>by {item?.writer}</StName>
        <StTime>{item?.createdAt}</StTime>
      </DetailWrap>

      <StContainer>
        <Titleset>{}</Titleset>
        <Body>{item?.content}</Body>

        <StCommentdiv>
          <Stcommentbtn
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? "댓글" : "댓글"}
          </Stcommentbtn>

          {visible && <CommentForm commentlist={item} />}
        </StCommentdiv>
        <StUserDiv>
          <StUser>
            <StBrunchImg src={item?.profileImage} />
            <Sth1Name>{item?.writer}</Sth1Name>
            <Sth4Name>회사원</Sth4Name>
            <Sth4Content>{item?.selfIntro}</Sth4Content>
          </StUser>
        </StUserDiv>
      </StContainer>
    </>
  );
};

export default Detail;

const DetailWrap = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  height: 480px;
  width: 100%;
  background-color: white;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const ItemWrap = styled.div`
  border: 1px solid gray;
  display: flex;
  height: 500px;
  width: 2050px;
  background-position: top center;
  background-size: cover;
  background-color: white;
`;

const Titleset = styled.div`
  color: black;
  font-size: 40px;
  font-weight: 300;
  padding-bottom: 30px;
  right: 300px;
`;

const Body = styled.div`
  margin: auto;
  font-size: 15px;
  width: 700px;
  line-height: 2;
  letter-spacing: 2px;
  left: 25%;
`;

const StTitle = styled.text`
  font-size: 40px;
  margin: 150px 0px 0px 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  top: 40%;
  position: absolute;
  transform: translate(-50%, -50%);
  color: black;
  z-index: 3;
  float: left;
`;

const Stcommentbtn = styled.button`
  float: right;
  background-color: white;
  color: #43494c;
  margin-right: 0 0 8px;
  height: 40px;
  width: 91.5px;
  padding: 10 80 8 10;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid #43494c;
`;

const StCommentdiv = styled.div`
  margin-top: 200px;
  height: 500px;
`;

const StContainer = styled.div`
  width: 700px;
  min-width: 700px;
  height: 90px;
  margin: auto;
`;

const StImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;

  z-index: 3;
`;

const StUserDiv = styled.div`
  height: 171.5px;

  width: 100%;
  background-color: #fbfbfb;
  margin-top: 50px auto;
`;

const StUser = styled.div`
  margin-top: 300px;
  height: 300px;

  width: 100%;
  justify-content: center;
  align-items: center;

  background-color: #fbfbfb;
`;

const Sth1Name = styled.div`
  font-size: xx-large;
`;

const Sth4Name = styled.div``;

const Sth4Content = styled.div`
  margin-top: 55px;
`;

const StBrunchImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  align-items: flex-end;
  float: right;
  background-color: #9d9898;
`;

const StName = styled.div`
  float: left;
  width: 700px;
  margin: 0px 0px 0px 700px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 3;
  top: 95%;
`;

const StTime = styled.div`
  float: left;

  width: 700px;
  box-sizing: border-box;
  z-index: 3;
  margin: 0px 0px 0px 950px;
  float: left;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 95%;
`;

const StSubTitle = styled.div`
  width: 700px;
  top: 41%;
  margin: 180px 10px 0px 0px;
  height: 30px;
  position: absolute;
  background: transparent;
  bottom: 90px;
  color: black;
  float: left;
  z-index: 3;
`;
