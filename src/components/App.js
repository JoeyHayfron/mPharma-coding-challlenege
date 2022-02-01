import React from "react";
import Header from "./Header";
import DrugsList from "./DrugsList";
import Feedback from "./Feedback";
import styled from "styled-components";
import Modal from "./modals/Modal";

function App(props) {
  return (
    <Wrapper>
      <Header />
      <DrugsList />

      <Modal />
      <Feedback />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding-bottom: 40px;
`;
