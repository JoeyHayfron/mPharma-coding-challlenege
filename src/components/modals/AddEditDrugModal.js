import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";

const Add_EditDrugModal = (props) => {
  const [drugName, setDrugName] = useState(
    props.drugName ? props.drugName : ""
  );
  const [drugPrice, setDrugPrice] = useState(
    props.drugPrice ? props.drugPrice : ""
  );

  return (
    <Wrapper>
      <h3>{props.title}</h3>
      <form style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        <Input label="Name" inputValue={drugName} />
        <Input label="Price (GHS)" inputValue={drugPrice} />
        <ButtonsWrapper>
          <Button>Cancel</Button>
          <Button buttonType="primary">{props.modalAction.text}</Button>
        </ButtonsWrapper>
      </form>
    </Wrapper>
  );
};

export default Add_EditDrugModal;

const Wrapper = styled.div``;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-self: flex-end;
  margin-top: 15px;
`;
