import React, { useState } from "react";
import style from "./style";
import styled from "styled-components";
import Comment from "./Comment";
import Mokdata from "./Mokdata";
import DetailNav from "../../components/navLayout/Nav/DetailNav";

const Detail = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <DetailNav />
      <DetailWrap>
        <StImg
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3W_tqjny09z__DK0Z6Xe6bQsUUnTUBezGp5S7ohg&s"
          }
        />
        <StTitle>여기에는 제목이 들어간다</StTitle>
      </DetailWrap>

      <StContainer>
        <Titleset>{}</Titleset>
        <Body>
          <Mokdata />
        </Body>

        <StCommentdiv>
          <Stcommentbtn
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? "댓글" : "댓글"}
          </Stcommentbtn>
          <hr />
          {visible && <Comment />}
        </StCommentdiv>
      </StContainer>
    </>
  );
};

export default Detail;

const DetailWrap = styled.text`
  border-bottom: 1px solid black;
  display: flex;
  height: 480px;
  width: 100%;
  background-color: white;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
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
  text-align-last: center;
  margin: auto;
  font-size: 15px;
  width: 700px;
  line-height: 2;
  letter-spacing: 2px;
`;

const StTitle = styled.text`
  font-size: 40px;
  margin: 150px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 50vw;
  top: 25%;
  position: absolute;
  transform: translate(-50%, -50%);
  color: white;
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
  position: absolute;
  z-index: 3;
`;
