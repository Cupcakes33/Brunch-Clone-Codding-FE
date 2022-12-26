import CommonBox from "../../components/common/CommonBox";
import styled from "styled-components";
import ContentList from "../../components/nowpage/ContentList";
import { useState } from "react";

const NowPage = () => {
  const [test, setTest] = useState(10);
  const arr = new Array(test).fill();

  return (
    <>
      <CommonBox width="100%" height="100px" />
      <StNowPageContainer>
        <StNowPageContentsWrapper>
          <button
            onClick={() => {
              setTest((prev) => {
                return prev + 10;
              });
            }}
          >
            1111
          </button>
          {arr.map((e, n) => {
            return <ContentList key={n} num={n}/>;
          })}
        </StNowPageContentsWrapper>
      </StNowPageContainer>
    </>
  );
};

export default NowPage;

const StNowPageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const StNowPageContentsWrapper = styled.ul`
  width: 700px;
  padding-top: 10px;
  list-style: none;
`;
