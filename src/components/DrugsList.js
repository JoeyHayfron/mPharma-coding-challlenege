import React, { useEffect } from "react";
import styled from "styled-components";
import DrugListItem from "./DrugsListItem";
import { connect } from "react-redux";
import { fetchProductsAsync } from "../redux/actions";
import { findLatestPrice } from "../utils/helper";

const DrugList = (props) => {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  return (
    <Wrapper>
      {props.entities.products
        ? props.entities.products.allIds.map((id) => (
            <DrugListItem
              key={id}
              name={props.entities.products.byId[id].name}
              price={findLatestPrice(
                props.entities.products.byId[id].prices,
                props.entities.prices
              )}
            />
          ))
        : ""}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    entities: state.inventory.entities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProductsAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrugList);

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
