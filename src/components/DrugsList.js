import React from "react";
import styled from "styled-components";
import DrugListItem from "./DrugsListItem";

const DrugList = (props) => {
  return (
    <Wrapper>
      {props.products.map((drug) => (
        <DrugListItem key={drug.id} name={drug.name} price="GHS 20" />
      ))}
    </Wrapper>
  );
};

export default DrugList;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding-top: 120px;

  @media (min-width: 992px) {
    width: 75%;
  }
`;
