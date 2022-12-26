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
  padding: 0px ${(props) => props.theme.padding.lg};
  transition: background 0.3s;
  font-weight: ${(props) => props.theme.fontWeight.demiLight};
  z-index: 9;
  ${(props) =>
    props.scrolled &&
    css`
      height: 60px;
      position: fixed;
      border-bottom: 1px solid ${(props) => props.theme.color.__line_border};
    `}
`;

const StNavCenterSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
`;

export { StNav, StNavCenterSpan };
