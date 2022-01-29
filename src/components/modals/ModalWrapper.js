import React from "react";
import styled from "styled-components";

const ModalWrapper = (props) => {
  return (
    <Wrapper>
      <Content>{props.children}</Content>
      <Backdrop data-testid="modal-backdrop" />
    </Wrapper>
  );
};

export default ModalWrapper;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  position: absolute;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  border-radius: 8px;
  width: 80%;

  @media (min-width: 992px) {
    width: 40%;
  }
`;
