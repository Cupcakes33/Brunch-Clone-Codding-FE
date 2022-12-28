import styled, { css } from "styled-components";
import { useState, useRef, useEffect } from "react";

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
  });
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
          <img src="https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-01.png" />
          <img src="https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-02.png" />
          <img src="https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-03.png" />
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

{
  /* <img src="https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-01.png" />
        <img src="https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-02.png" />
        <img src="https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-03.png" /> */
}

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

  img {
    flex: none;
    width: 100%;
    height: 100%;
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
