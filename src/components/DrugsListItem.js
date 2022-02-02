import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { showModal, editProduct } from "../redux/actions";

const DrugListItem = (props) => {
  return (
    <Wrapper data-testid="drugs-list-item">
      <ItemDetails>
        <ItemName data-testid="item-name">{props.name}</ItemName>
        <div>
          <span>
            <b>Current Price: </b>
          </span>
          <ItemPrice data-testid="item-price">GHS {props.price}</ItemPrice>
        </div>
      </ItemDetails>
      <ButtonsWrapper>
        <ImageButton
          src="/images/edit.png"
          height="25"
          onClick={() =>
            props.showModal({
              modalType: "edit-drug-modal",
              title: "Edit Drug",
              action: "Save",
              name: props.name,
              price: props.price,
              id: props.id,
            })
          }
          data-testid="edit-drug-icon"
        />
        <ImageButton
          src="/images/delete.png"
          height="25"
          onClick={() =>
            props.showModal({
              title: "Delete Drug",
              modalType: "delete-drug-modal",
              id: props.id,
              name: props.name,
              action: "Delete",
            })
          }
          data-testid="delete-drug-icon"
        />
      </ButtonsWrapper>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    editDrug: (productInfo) => dispatch(editProduct(productInfo)),
    showModal: (modalInfo) => dispatch(showModal(modalInfo)),
  };
};

export default connect(null, mapDispatchToProps)(DrugListItem);

const Wrapper = styled.div`
  padding: 30px 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: Sofia Pro;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ItemName = styled.p`
  padding: 0px;
  margin: 0px;
`;

const ItemPrice = styled.p`
  padding: 0px;
  margin: 0px;
  display: inline-block;
`;

const ImageButton = styled.img`
  cursor: pointer;
`;
