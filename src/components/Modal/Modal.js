import { useEffect, useRef } from "react";
import styled from "styled-components";
import useOutsideClick from "../../hooks/useOutsideClick";
import { ItemCloseBtn } from "../navLayout/imgItems";
import ModalPortal from "./ModalPortal";

const Modal = ({ onClose, children }) => {
  const modalRef = useRef(null);
  const closeModalHander = () => {
    onClose?.();
  };
  useOutsideClick(modalRef, closeModalHander);

  useEffect(() => {
    const body = document.querySelector("body");
    const defaultStyle = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = defaultStyle;
    };
  }, []);
  return (
    <ModalPortal>
      <StModalOverlay>
        <StModalWrapper ref={modalRef}>
          <StModalCloseBtn onClick={closeModalHander} />
          {children}
        </StModalWrapper>
      </StModalOverlay>
    </ModalPortal>
  );
};

const StModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  border: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
`;

const StModalWrapper = styled.div`
  width: 1000px;
  height: 610px;
  overflow: hidden;
  border-radius: 15px;
  background-color: ${(props) => props.theme.color.__nav_bg};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* padding: 74px 47px 72px 47px; */
  display: flex;
  flex-direction: row;
`;

const StModalCloseBtn = styled(ItemCloseBtn)`
  position: absolute;
  top: 22px;
  right: 22px;
`;

export default Modal;
