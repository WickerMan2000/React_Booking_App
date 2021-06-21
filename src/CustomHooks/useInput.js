import { useState } from "react";

const useInput = () => {
  const [inputCase, setInputCase] = useState("");
  const [touchInput, setTouchInput] = useState(false);
  const [inputValidation, setInputValidation] = useState(false);

  const blurHandler = () => {
    setTouchInput(true);

    if (inputCase.trim() !== "") {
      setInputValidation(true);
      return;
    }
  };

  const changeHandler = event => {
    const { value } = event.target;
    setInputCase(value);

    if (value.trim() === "") {
      setInputValidation(false);
      return;
    }

    setInputValidation(true);
  };

  const submissionCase = () => {
    setTouchInput(true);

    if (inputCase.trim() === "") {
      setInputValidation(false);
    }

    setInputCase("");
    setInputValidation(true);
  };

  return {
    inputCase,
    touchInput,
    inputValidation,
    blurHandler,
    changeHandler,
    submissionCase,
  };
};

export default useInput;
