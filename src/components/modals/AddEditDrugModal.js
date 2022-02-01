import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";
import { connect } from "react-redux";
import { hideModal, addProduct, editProduct } from "../../redux/actions";
import moment from "moment";

const AddEditDrugModal = (props) => {
  const [drugName, setDrugName] = useState(props.modalInfo.name);
  const [drugPrice, setDrugPrice] = useState(props.modalInfo.price);

  const addNewProduct = (e) => {
    e.preventDefault();
    props.addProduct({
      name: drugName,
      price: parseFloat(+drugPrice),
      date: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ssZ"),
    });
    props.dismissModal();
  };

  const editNewProduct = (e) => {
    e.preventDefault();
    let productInfo = {
      id: props.modalInfo.id,
      name: drugName,
      price: parseFloat(+drugPrice),
      date: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ssZ"),
    };

    let previousInfo = {
      id: props.modalInfo.id,
      name: props.modalInfo.name,
      price: props.modalInfo.price,
    };

    let editInfo = {
      productInfo,
      previousInfo,
    };
    props.editProduct(editInfo);
    props.dismissModal();
  };

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
          type="text"
          pattern="[0-9]*"
        />
        <ButtonsWrapper>
          <Button
            onClick={(e) => {
              e.preventDefault();
              props.dismissModal();
            }}
          >
            Cancel
          </Button>
          <Button
            buttonType="primary"
            onClick={(e) => {
              if (props.modalInfo.modalType === "add-drug-modal")
                addNewProduct(e);
              else if (props.modalInfo.modalType === "edit-drug-modal")
                editNewProduct(e);
            }}
          >
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
    editProduct: (productInfo) => dispatch(editProduct(productInfo)),
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
