import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Comment = () => {
  const [comment, setComment] = useState("");
  const onChangeHandler = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  return (
    <StCommentList>
      <StCommentCount>
        <StCount>댓글</StCount>
      </StCommentCount>
      <Stcommentdiv>
        <StImg
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3W_tqjny09z__DK0Z6Xe6bQsUUnTUBezGp5S7ohg&s"
          }
        />
        <StcommentInput>
          <Commentinput
            type="text"
            name="content"
            value={comment}
            onChange={onChangeHandler}
          />
          <StCommentBtn>
            <AddButton onClick={onsubmit}>확인</AddButton>
          </StCommentBtn>
        </StcommentInput>
      </Stcommentdiv>
    </StCommentList>
  );
};

export default Comment;

const Commentinput = styled.input`
  margin: 20px;
  padding: 15px 19px 0;
  word-wrap: break-word;
  border: none;
  width: 560px;
  float: right;
`;

const AddButton = styled.button`
  border: 1px solid black;
  height: 30px;
  width: 56px;
  font-size: 12px;
  color: #666;
  background-color: white;
  border: 1px solid #bbb;
  border-radius: 50px;
  cursor: pointer;
  float: right;
  line-height: 28px;
  margin-right: 10px;
`;

const Stcommentdiv = styled.div`
  width: 700px;
  height: 120px;

  display: flex;
  opacity: 0.9;
`;

const StCommentList = styled.div`
  margin-top: 20px;
  min-width: 1020px;
  padding-bottom: 142px;
  padding-top: 44px;
`;
const StcommentInput = styled.div`
  width: 600px;
  border: 1px solid black;
  /* float: right; */
  margin-left: 50px;
`;

const StCommentBtn = styled.div`
  background-color: white;
  color: #43494c;
  margin-right: 8px;
  height: 44px;
  width: 300px;
  padding: 14 19 0;
  float: right;
`;

const StCommentCount = styled.div`
  border-bottom: 1px solid #bbb;
  width: 700px;
  margin-bottom: 20px;
`;

const StCount = styled.div`
  align-content: flex-start;
  margin-bottom: 15px;
  width: 60px;
`;

const StImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const StCommentlistWraper = styled.div``;

const StCommentBox = styled.div``;

const StContent = styled.div``;

const StButton = styled.button``;

const StUpdateButton = styled.button``;
