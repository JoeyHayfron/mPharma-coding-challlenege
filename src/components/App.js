import React, { useEffect } from "react";
import Header from "./Header";
import DrugsList from "./DrugsList";
import { drugs } from "../shared/data";
import styled from "styled-components";
// import ModalWrapper from "./modals/ModalWrapper";

function App(props) {
  return (
    <Wrapper>
      <Header />
      <DrugsList />

      {/* <ModalWrapper>
        <AddEditDrugModal
          drugName="Para"
          drugPrice="GHS 20"
          title="Edit Drug"
          modalAction={{ text: "Save", task: () => {} }}
        />
        <DeleteDrugModal
          title="Delete Drug"
          modalAction={{ text: "Delete", task: () => {} }}
          drugName="Para"
        />
      </ModalWrapper> */}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding-bottom: 40px;
`;
