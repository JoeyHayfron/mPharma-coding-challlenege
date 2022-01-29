import React, { useState } from "react";
import styled from "styled-components";

const Input = (props) => {
  const [showLabel, setShowLabel] = useState(false);

  return (
    <Wrapper>
      <Label showLabel={showLabel} htmlFor={props.label}>
        {props.label}
      </Label>
      <CustomInput
        id={props.label}
        type="text"
        placeholder={props.label}
        onFocus={() => setShowLabel(true)}
        onBlur={() => setShowLabel(false)}
        value={props.inputValue}
        onChange={props.onChange}
        data-testid="custom-input"
      />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: Sofia Pro;
`;

const CustomInput = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid;
  outline: none;

  :focus {
    border-bottom: 1px solid #ff5000;
  }
`;

const Label = styled.label`
  position: ${(props) => (props.showLabel ? "relative" : "absolute")};
  transform: ${(props) =>
    props.showLabel ? "translateY(0%)" : "translateY(70%)"};
  opacity: ${(props) => (props.showLabel ? 1 : 0)};
  transition: all 0.1s ease-in-out;
`;