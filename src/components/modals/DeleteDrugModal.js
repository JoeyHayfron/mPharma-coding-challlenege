import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../Button";
import { deleteProduct, hideModal } from "../../redux/actions";

const DeleteDrugModal = (props) => {
  const deleteProduct = () => {
    let productInfo = {
      id: props.modalInfo.id,
      name: props.modalInfo.name,
    };

    props.deleteProduct(productInfo);

    props.dismissModal();
  };
  return (
    <Wrapper data-testid="delete-drug-modal">
      <h3 data-testid="delete-drug-modal-title">{props.modalInfo.title}</h3>
      <div>
        Are you sure you want to delete{" "}
        <span
          style={{ color: "#ff5000", fontWeight: "600" }}
          data-testid="delete-drug-name"
        >
          {props.modalInfo.name}
        </span>
        ?
      </div>
      <ButtonsWrapper>
        <Button onClick={() => props.dismissModal()}>Cancel</Button>
        <Button
          buttonType="primary"
          onClick={deleteProduct}
          data-testid="delete-drug-button"
        >
          {props.modalInfo.action}
        </Button>
      </ButtonsWrapper>
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
    deleteProduct: (productInfo) => dispatch(deleteProduct(productInfo)),
    dismissModal: () => dispatch(hideModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteDrugModal);

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
