import CommonBox from "../../components/common/CommonBox";
import styled from "styled-components";
import ContentList from "../../components/nowpage/ContentList";
import useIntersectionObserve from "../../hooks/useIntersectionObserve";


const NowPage = () => {
  const { itemLists, setTarget } = useIntersectionObserve(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20`
  );

  return (
    <>
      <StScrollTopButton
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
      <CommonBox width="100%" height="100px" />
      <StNowPageContainer>
        <StNowPageContentsWrapper>
          {itemLists.map((e, n) => {
            console.log(e);
            return <ContentList name={e.name} url={e.url} key={n} num={n} />;
          })}
          <StLastItem ref={setTarget} />
        </StNowPageContentsWrapper>
      </StNowPageContainer>
    </>
  );
};

export default NowPage;
const StScrollTopButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: fixed;
  bottom: 100px;
  right: 100px;
`;
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

const StLastItem = styled.div`
  width: 100%;
  height: 200px;
`;