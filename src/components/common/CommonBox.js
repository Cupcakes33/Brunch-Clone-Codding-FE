import styled from "styled-components";

const CommonBox = ({
  children,
  maxWidth,
  width,
  maxHeight,
  height,
  display,
  position,
  top,
  bottom,
  left,
  right,
  flexDirection,
  alignItems,
  justifyContent,
  gap,
  padding,
  margin,
  marginTop,
  marginRight,
  marginLeft,
  backgroundColor,
  color,
  border,
  borderRadius,
  borderBottom,
  paddingTop,
  paddingBottom,
  textAlign,
  fontWeight,
}) => {
  const styles = {
    children,
    maxWidth,
    width,
    maxHeight,
    height,
    display,
    position,
    top,
    bottom,
    left,
    right,
    flexDirection,
    alignItems,
    justifyContent,
    gap,
    padding,
    margin,
    marginTop,
    marginRight,
    marginLeft,
    backgroundColor,
    color,
    border,
    borderRadius,
    borderBottom,
    paddingTop,
    paddingBottom,
    textAlign,
    fontWeight,
  };
  return <StBox {...styles}>{children}</StBox>;
};

CommonBox.defaultProps = {
  display: "flex",
};

const StBox = styled.div`
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-height: ${({ maxHeight }) => maxHeight};
  position: ${({ position }) => position};
  display: ${({ display }) => display};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  margin-right: ${({ marginRight }) => marginRight};
  margin-left: ${({ marginLeft }) => marginLeft};
  padding: ${({ padding }) => padding};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-bottom: ${({ borderBottom }) => borderBottom};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export default CommonBox;
