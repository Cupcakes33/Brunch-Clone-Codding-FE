import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __addComment, __deletecomment } from "../../redux/slices/detailSlice";

const CommentForm = ({ commentlist }) => {
  const dispatch = useDispatch();
  console.log(commentlist);
  // const user = useSelector((state) => state.loginSlice);

  const [comment, setComment] = useState("");
  const onChangeHandler = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    const payload = {
      postId: commentlist?.postId,
      content: comment,
    };
    dispatch(__addComment(payload));
    // console.log("12", payload);
  };

  const handleDelete = (commentId) => {
    dispatch(__deletecomment(commentId));
  };

  return (
    <StCommentList>
      <StCommentCount>
        <StCount>댓글{commentlist?.CommentsCount}</StCount>
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
          {commentlist?.comment.map((comment, idx) => {
            return (
              <StCommentBox key={idx}>
                <StUserImg
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3W_tqjny09z__DK0Z6Xe6bQsUUnTUBezGp5S7ohg&s"
                  }
                />
                <StName>
                  {commentlist?.writer} {comment.createdAt}
                </StName>

                <StContent>{comment.content}</StContent>

                {/* {user.isLogedIn && ( */}
                <>
                  <StButton
                    className="rotate-in-center"
                    borderColor="red"
                    onClick={() =>
                      handleDelete({
                        commentId: comment.commentId,
                        itemId: commentlist?.itemId,
                      })
                    }
                  >
                    삭제하기
                  </StButton>
                  {/* <StUpdateButton
                    onClick={() => {
                      setUpdate(true);
                      setUpdateInputDiv(
                        <UpdateInput
                          update={update}
                          commentId={comment.commentId}
                          itemId={commentlist?.itemId}
                        />
                      );
                    }}
                  >
                    수정
                  </StUpdateButton> */}
                </>
                {/* )} */}
              </StCommentBox>
            );
          })}
        </StcommentInput>
      </Stcommentdiv>
    </StCommentList>
  );
};

export default CommentForm;

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

const StCommentBox = styled.div`
  border-color: black;
  float: right;
  height: 130px;
  border-bottom: 1px solid black;

  margin-top: 10px;
  width: 700px;
  margin: auto;
  justify-content: center;
  padding: 30px 0px 10px 10px;
`;

const StContent = styled.div`
  width: 700px;

  /* float: right; */
  margin-top: 20px;
`;

const StButton = styled.button``;

const StUpdateButton = styled.button``;

const StUserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
`;

const StName = styled.div`
  width: 500px;
  float: left;
  /* float: right; */
  margin-left: 100px;
`;

const StTime = styled.div`
  width: 200px;

  /* float: right; */
  margin-left: 150px;
`;
