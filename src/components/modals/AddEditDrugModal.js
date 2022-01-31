import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";
import { connect } from "react-redux";
import { hideModal, addProduct } from "../../redux/actions";
import moment from "moment";

const AddEditDrugModal = (props) => {
  const [drugName, setDrugName] = useState(props.modalInfo.name);
  const [drugPrice, setDrugPrice] = useState(props.modalInfo.name);

  const addNewProduct = (e) => {
    e.preventDefault();
    props.addProduct({
      name: drugName,
      price: drugPrice,
      date: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ssZ"),
    });
    props.dismissModal();
  };
  const editNewProduct = (productInfo) => {};

  return (
    <Wrapper>
      <h3>{props.modalInfo.title}</h3>
      <form style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        <Input
          label="Name"
          inputValue={drugName}
          onChange={(e) => setDrugName(e.target.value)}
          type="text"
        />
        <Input
          label="Price (GHS)"
          inputValue={drugPrice}
          onChange={(e) => setDrugPrice(e.target.value)}
          type="number"
        />
        <ButtonsWrapper>
          <Button onClick={() => props.dismissModal()}>Cancel</Button>
          <Button buttonType="primary" onClick={addNewProduct}>
            {props.modalInfo.action}
          </Button>
        </ButtonsWrapper>
      </form>
    </Wrapper>
  );
};
const mapStateToProps = (state) => {
  return {
    modalInfo: state.ui.modalInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dismissModal: () => dispatch(hideModal()),
    addProduct: (productInfo) => dispatch(addProduct(productInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditDrugModal);

const Wrapper = styled.div``;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-self: flex-end;
  margin-top: 15px;
`;
