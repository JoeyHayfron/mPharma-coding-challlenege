import Header from "./Header";
import DrugsList from "./DrugsList";
import { drugs } from "../shared/data";
import styled from "styled-components";
// import Feedback from "./Feedback";
import ModalWrapper from "./modals/ModalWrapper";
import AddEditDrugModal from "./modals/AddEditDrugModal";
import DeleteDrugModal from "./modals/DeleteDrugModal";

function App() {
  return (
    <Wrapper>
      <Header />
      <DrugsList products={drugs.products} />

      <ModalWrapper>
        {/* <AddEditDrugModal
          drugName="Para"
          drugPrice="GHS 20"
          title="Edit Drug"
          modalAction={{ text: "Save", task: () => {} }}
        /> */}
        <DeleteDrugModal
          title="Delete Drug"
          modalAction={{ text: "Delete", task: () => {} }}
          drugName="Para"
        />
      </ModalWrapper>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding-bottom: 40px;
`;
