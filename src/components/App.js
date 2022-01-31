import React, { useEffect } from "react";
import Header from "./Header";
import DrugsList from "./DrugsList";
import { drugs } from "../shared/data";
import styled from "styled-components";
import Modal from "./modals/Modal";

function App(props) {
  return (
    <Wrapper>
      <Header />
      <DrugsList />

      <Modal />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding-bottom: 40px;
`;
