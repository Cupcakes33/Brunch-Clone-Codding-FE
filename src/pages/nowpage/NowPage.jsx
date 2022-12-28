import { useState } from "react";
import CommonButton from "../../components/common/CommonButton";
import CommonBox from "../../components/common/CommonBox";
import styled from "styled-components";
import ContentList from "../../components/nowpage/ContentList";
import useIntersectionObserve from "../../hooks/useIntersectionObserve";
import Nav from "../../components/navLayout/Nav/Nav";
import LoginModal from "../../components/LoginModal/LoginModal";

const NowPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { itemLists, setTarget } = useIntersectionObserve(
    `https://brunchclone.shop/api/post`
  );

  // 관리하지 않아도 되는 상태 ?
  // 관리하는 상태들을 정리하고
  // 상태들의 관계를 확인하고
  // '파생상태'가 관리가 될 수 있도록 통제할 것
  // 관리되고 있는 상태를 원하는 값으로 렌더링 간에 바꿔주고 싶다면
  // 의존성 배열을 이용할 것

  return (
    <>
      {isOpen && (
        <LoginModal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
      <Nav />
      <StScrollTopButton
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        TOP
      </StScrollTopButton>
      <CommonBox width="100%" height="100px" />
      <StNowPageContainer>
        <StNowPageContentsWrapper>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            modal
          </button>
          {itemLists.map((e, n) => {
            return (
              <ContentList
                title={e.title}
                subtitle={e.subtitle}
                content={e.content}
                img={e.coverImage}
                createAt={e.createdAt}
                key={`nowitem${n}`}
              />
            );
          })}
          <StLastItem ref={setTarget} />
        </StNowPageContentsWrapper>
      </StNowPageContainer>
    </>
  );
};

export default NowPage;
const StScrollTopButton = styled(CommonButton)`
  position: fixed;
  bottom: 100px;
  right: 100px;
  cursor: pointer;
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
