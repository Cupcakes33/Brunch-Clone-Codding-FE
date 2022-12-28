import styled, { css } from "styled-components";

const colorType = css`
  ${(props) =>
    props.colorType === "contents" &&
    css`
      color: ${(props) => props.theme.color.__line_contents};
      border: 1px solid ${(props) => props.theme.color.__line_contents};
    `}
`;

const sizeType = css`
  ${(props) =>
    props.sizeType === "tag" &&
    css`
      width: max-content;
      height: ${(props) => props.theme.font.sm};
      padding: 0px 6px;
      color: ${(props) => props.theme.color.__text_sub};
      border: 1px solid ${(props) => props.theme.color.__text_sub};
      font-size: ${(props) => props.theme.font.small};
    `}
`;

const Button = styled.button`
  width: 80px;
  height: ${(props) => props.theme.font.lg};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${(props) => props.theme.fontWeight.demiLight};
  color: ${(props) => props.theme.color.__text_caption_1};
  background-color: white;
  border: 1px solid ${(props) => props.theme.color.__text_caption_1};
  border-radius: 15px;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 0.7;
  }

  ${colorType}
  ${sizeType}
`;

const CommonButton = ({ children, sizeType, colorType, icon, ...rest }) => {
  return (
    <Button colorType={colorType} sizeType={sizeType} {...rest}>
      {icon}
      {children}
    </Button>
  );
};

export default CommonButton;

// colorType={contents} -> 초록색 버튼, default 회색버튼
// sizeType={tag} -> 디테일 페이지 태그, default 기본 버튼
