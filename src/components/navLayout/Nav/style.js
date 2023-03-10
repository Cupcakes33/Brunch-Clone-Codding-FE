import styled, { css } from "styled-components";

const StNav = styled.header`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;

  padding: 0px ${(props) => props.theme.padding.lg};
  transition: background 0.3s;
  font-weight: ${(props) => props.theme.fontWeight.demiLight};
  z-index: 9;
  ${(props) =>
    props.scrolled &&
    css`
      height: 60px;
      position: fixed;
      opacity: 0.8;
      border-bottom: 1px solid ${(props) => props.theme.color.__line_border};
    `}
`;

const StNavCenterSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
`;

const StDetailPageNavCenterSpan = styled(StNavCenterSpan)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: ${(props) => props.theme.font.base};
  font-weight: ${(props) => props.theme.fontWeight.demiLight};
  color: ${(props) => props.theme.color.__text_sub};
`;

export { StNav, StNavCenterSpan, StDetailPageNavCenterSpan };
