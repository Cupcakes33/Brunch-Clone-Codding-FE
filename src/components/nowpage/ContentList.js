import styled from "styled-components";
import CommonBox from "../common/CommonBox";

const ContentList = ({ title, content, img, createAt }) => {
  return (
    <StContentList>
      <CommonBox
        flexDirection="column"
        width="75%"
        height="120px"
        justifyContent="space-between"
      >
        {/* title={e.title}
                subtitle={e.subtitle}
                content={e.content}
                img={e.coverImage}
                createAt={e.createdAt} */}
        <StContentLink>
          <strong>{title}</strong>
          <span>{content}</span>
        </StContentLink>
        <StContentWriterBox>
          <a>김설원</a>
          <span>{createAt}</span>
        </StContentWriterBox>
      </CommonBox>
      <StThumbnailImgBox>
        <img src={img} />
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
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    height: 100%;

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
