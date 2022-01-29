import React from "react";
import styled from "styled-components";

const Feedback = (props) => {
  return (
    <Wrapper>
      <Content feedbackType={props.feedBackType}>
        <h3 style={{ margin: "0px" }}>{props.title}</h3>
        <p>{props.message}</p>
        <Retry>{props.action}</Retry>
      </Content>
    </Wrapper>
  );
};

export default Feedback;

const Wrapper = styled.div`
  width: 82%;
  height: 130px;
  border-radius: 10px;
  box-shadow: 0px 1px 2px 3px rgba(0, 0, 0, 0.1);
  background: white;
  position: fixed;
  bottom: 10px;
  right: 10px;
  overflow: hidden;
  z-index: 300;
  transform: translateX();

  @media (min-width: 992px) {
    width: 28%;
  }
`;

const Content = styled.div`
  background: ${(props) =>
    props.feedBackType === "error"
      ? "rgba(255, 0, 0, 0.3)"
      : props.feedBackType === "warning"
      ? "rgba(255, 233, 0, 0.3)"
      : "rgba(0, 255, 0, 0.3)"};
  height: 100%;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Retry = styled.span`
  cursor: pointer;
  color: red;
  align-self: flex-end;
  margin-right: 40px;
`;
