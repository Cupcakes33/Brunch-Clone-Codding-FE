import React, { useState } from "react";

const useInputItem = () => {
  const [input, setInput] = useState({
    title: "",
    subtitle: "",
    content: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const reset = () => {
    setInput({ title: "", subtitle: "", content: "" });
  };
  return { input, setInput, onChangeHandler, reset };
};

export default useInputItem;
