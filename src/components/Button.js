import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <Wrapper buttonType={props.type} {...props}>
      {props.children}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button`
  font-family: Sofia Pro;
  font-weight: bold;
  background-color: ${(props) =>
    props.buttonType === "primary" ? "#ff5000" : "#eaf7ef"};
  border: none;
  color: ${(props) => (props.buttonType === "primary" ? "#eaf7ef" : "#ff5000")};
  border-radius: 100px;
  padding: 20px 35px;
  cursor: pointer;
`;
