import styled from "styled-components";
import CommonBox from "../common/CommonBox";
import spriteImg from "../../styles/spriteImg.png";

const ContentList = ({ name, url }) => {
  return (
    <StContentList>
      <CommonBox
        flexDirection="column"
        width="75%"
        height="120px"
        justifyContent="space-between"
      >
        <StContentLink>
          <strong>{name}</strong>
          <span>
            지금 아버지와 나는 출발 선상에 있다. 공교롭게도 우리는 한날한시에
            각자의 목적지를 향해 달리게 됐다. 누군가가 고약한 심술을
            부려'결혼'과 '유기'라는
          </span>
        </StContentLink>
        <StContentWriterBox>
          <a>김설원</a>
          <span>3분전</span>
        </StContentWriterBox>
      </CommonBox>
      <StThumbnailImgBox>
        <img src={spriteImg}></img>
      </StThumbnailImgBox>
    </StContentList>
  );
};

export default ContentList;

const StContentList = styled.li`
  width: 100%;
  height: 180px;
  border-bottom: 1px solid ${(props) => props.theme.color.__line_border};
  padding: 25px 0px 30px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StContentLink = styled.a`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  strong {
    color: ${(props) => props.theme.color.__text_main};
    font-size: ${(props) => props.theme.font.sm};
    font-weight: ${(props) => props.theme.fontWeight.demiLight};
    margin-bottom: 3px;
  }
  span {
    color: ${(props) => props.theme.color.__text_sub};
    font-size: ${(props) => props.theme.font.base};
    font-weight: ${(props) => props.theme.fontWeight.demiLight};
  }
  &:hover strong {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
`;

const StContentWriterBox = styled.div`
  color: ${(props) => props.theme.color.__text_caption_1};
  font-size: ${(props) => props.theme.font.small};
  &::before {
    content: "By ";
  }
  span {
    &::before {
      content: " · ";
    }
  }
`;

const StThumbnailImgBox = styled.a`
  cursor: pointer;
  width: 120px;
  height: 120px;

  img {
    width: 100%;
    height: 100%;
  }
`;
