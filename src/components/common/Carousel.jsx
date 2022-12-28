import styled, { css } from "styled-components";
import { useState, useRef, useEffect } from "react";

// 캐러셀 컴포넌트를 어떻게 하면 재사용이 가능하게 바꿀 수 있을까 ?
// 이 컴포넌트에서 관리되고 있는 currentIndex state와 carouselRef는 변동사항 없음
// useEffect로 translateX 해주는 부분도 변동사항 없음
// 자동 다음화면 interval 함수도 변동사항 없음. 딜레이를 유동적으로 바꾸고 싶다면 조정해줄 수 있겠다.
// 하드코딩된 이미지들 -> 배열화
// 하드코딩된 인덱스들 -> 배열의 인덱스
// 예를들어 next 값이 인덱스.length의 마지막 인덱스라면 0으로 되돌리기~ 같은 코드를 짜면 좋을 것 같다
// 페이징 아이콘도 배열의 인덱스만큼 map 메소드로 반복하는 코드를 짜면 좋을 것 같다

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    carouselRef.current.style.transform = `translateX(-${currentIndex}00%)`;
  }, [currentIndex]);

  useEffect(() => {
    const intervalCarousel = setInterval(nextImgMoveBtnHandler, 2000);
    return () => {
      clearInterval(intervalCarousel);
    };
  }, []);

  const prevImgMoveBtnHandler = () => {
    if (currentIndex === 0) {
      setCurrentIndex(2);
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  const nextImgMoveBtnHandler = () => {
    if (currentIndex === 2) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <>
      <StCarouselContainer>
        <StCarouselImgWrapper ref={carouselRef}>
          <div>
            <img src="https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-01.png" />
            <h2>브런치 작가로 데뷔하세요</h2>
            <span>당신의 이야기를 세상에 선보이세요.</span>
          </div>
          <div>
            <img src="https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-02.png" />
            <h2>브런치로 제안받는 새로운 기회</h2>
            <span>작가님의 작품이 프로젝트화 됩니다.</span>
          </div>
          <div>
            <img src="https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-03.png" />
            <h2>글로 만나는 작가의 경험</h2>
            <span>당신에게 영감을 주는 작품을 추천합니다.</span>
          </div>
        </StCarouselImgWrapper>
      </StCarouselContainer>
      <StCarouselBtnWrapper>
        <button onClick={prevImgMoveBtnHandler} />
        <StPagingIcon page={currentIndex === 0} />
        <StPagingIcon page={currentIndex === 1} />
        <StPagingIcon page={currentIndex === 2} />
        <button onClick={nextImgMoveBtnHandler} />
      </StCarouselBtnWrapper>
    </>
  );
};

export default Carousel;

const StCarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const StCarouselImgWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: all 0.4s ease;
  div {
    flex: none;
    width: 100%;
    height: 100%;
    text-align: center;
    span {
      color: ${(props) => props.theme.color.__text_sub2};
    }
  }

  img {
    width: 100%;
    height: 80%;
    object-fit: contain;
  }
`;

const StCarouselBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: black;
  margin-top: 30px;
  button {
    background: none;
    color: #b2b2b2;
    cursor: pointer;
    &::before {
      content: ">";
    }
    &:first-child {
      transform: rotate(180deg);
    }
  }
`;

const StPagingIcon = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 5px;
  border: 1px solid #dedede;
  ${(props) =>
    props.page &&
    css`
      border: none;
      background-color: #b2b2b2;
    `}
`;
