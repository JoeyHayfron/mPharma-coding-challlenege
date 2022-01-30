import React from "react";
import styled from "styled-components";

const DrugListItem = (props) => {
  return (
    <Wrapper data-testid="drugs-list-item">
      <ItemDetails>
        <ItemName data-testid="item-name">{props.name}</ItemName>
        <ItemPrice data-testid="item-price">GHS {props.price}</ItemPrice>
      </ItemDetails>
      <ButtonsWrapper>
        <ImageButton src="/images/edit.png" height="25" />
        <ImageButton src="/images/delete.png" height="25" />
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default DrugListItem;

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
`;

const ImageButton = styled.img`
  cursor: pointer;
`;
