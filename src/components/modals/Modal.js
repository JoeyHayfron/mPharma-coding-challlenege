import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { hideModal } from "../../redux/actions";
import AddEditDrugModal from "./AddEditDrugModal";
import DeleteDrugModal from "./DeleteDrugModal";

const ModalWrapper = (props) => {
  return (
    <Wrapper showModal={props.showModal}>
      <Content>
        {props.modalInfo ? (
          props.modalInfo.modalType === "add-drug-modal" ? (
            <AddEditDrugModal />
          ) : props.modalInfo.modalType === "delete-drug-modal" ? (
            <DeleteDrugModal />
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </Content>
      <Backdrop
        data-testid="modal-backdrop"
        onClick={() => props.dismissModal()}
      />
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    showModal: state.ui.showModal,
    modalInfo: state.ui.modalInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dismissModal: () => dispatch(hideModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);

const Wrapper = styled.div`
  display: ${(props) => (props.showModal ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  position: absolute;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  border-radius: 8px;
  width: 80%;

  @media (min-width: 992px) {
    width: 40%;
  }
`;
