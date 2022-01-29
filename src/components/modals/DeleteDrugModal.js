import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

const DeleteDrugModal = (props) => {
  return (
    <Wrapper>
      <h3>{props.title}</h3>
      <div>
        Are you sure you want to delete{" "}
        <span
          style={{ color: "#ff5000", fontWeight: "600" }}
          data-testid="delete-drug-name"
        >
          {props.drugName}
        </span>
        ?
      </div>
      <ButtonsWrapper>
        <Button>Cancel</Button>
        <Button buttonType="primary">{props.modalAction.text}</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default DeleteDrugModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-self: flex-end;
  margin-top: 15px;
`;
