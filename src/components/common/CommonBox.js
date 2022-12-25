import styled from "styled-components";

const CommonBox = ({
  children,
  width,
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
  marginRight,
  marginLeft,
  backgroundColor,
  color,
  border,
  borderRadius,
}) => {
  const styles = {
    children,
    width,
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
    marginRight,
    marginLeft,
    backgroundColor,
    color,
    border,
    borderRadius,
  };
  return <StBox {...styles}>{children}</StBox>;
};

CommonBox.defaultProps = {
  display: "flex",
};

const StBox = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
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
  margin-right: ${({ marginRight }) => marginRight};
  margin-left: ${({ marginLeft }) => marginLeft};
  padding: ${({ padding }) => padding};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

export default CommonBox;
