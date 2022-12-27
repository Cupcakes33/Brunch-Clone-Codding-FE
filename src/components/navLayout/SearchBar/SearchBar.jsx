import { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

import { ItemSearchBtn } from "../imgItems";
import debounce from "../../../libs/debounce";
import useOutsideClick from "../../../hooks/useOutsideClick";

const SerchBar = () => {
  const searchBarRef = useRef();
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useOutsideClick(searchBarRef, setSearchBarActive);
  const searchInputHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const debounceSerchInput = debounce(searchInputHandler, 100);

  return (
    <StSearchForm
      ref={searchBarRef}
      onSubmit={(event) => {
        event.preventDefault();
        console.log(searchInput);
        // 여기에 검색 로직이 들어가야함
      }}
    >
      <StSearchInput
        type="text"
        placeholder="검색어를 입력해주세요"
        active={searchBarActive}
        onChange={debounceSerchInput}
      />
      <StSearchIcon
        onClick={() => {
          if (!searchBarActive) {
            setSearchBarActive((prev) => !prev);
          }
        }}
      />
    </StSearchForm>
  );
};

export default SerchBar;

const StSearchForm = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StSearchInput = styled.input`
  position: relative;
  padding: 15px 40px 15px 20px;
  width: 0px;
  height: 36px;
  font-size: ${(props) => props.theme.font.ss};
  border: none;
  outline: none;
  transition: width 0.4s ease;

  ${(props) =>
    props.active &&
    css`
      width: 200px;
      border: 1px solid ${(props) => props.theme.color.__line_border};
      border-radius: 20px;
      padding-left: 35px;
    `}
`;

const StSearchIcon = styled(ItemSearchBtn)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-position: -57px 0px;
`;
