import React from "react";
import styled from "styled-components";
import Button from "./Button";
import BarLoader from "react-spinners/BarLoader";
import { connect } from "react-redux";
import { showModal } from "../redux/actions";

const Header = (props) => {
  return (
    <Wrapper>
      <Logo
        src="/images/logo.png"
        height="50px"
        alt="mpharma-logo"
        data-testid="mpharma-logo"
      />
      <Button
        type="primary"
        onClick={() => {
          props.showModal({
            modalType: "add-drug-modal",
            title: "Add Drug",
            action: "Add",
          });
        }}
      >
        Add a Drug
      </Button>
      {props.isLoading ? (
        <BarLoader
          color="#ff5000"
          height={4}
          loading={true}
          css={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            width: "100%",
          }}
        />
      ) : (
        ""
      )}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.ui.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (modalInfo) => dispatch(showModal(modalInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const Wrapper = styled.div`
  height: 100px;
  background-color: #ebeffb;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 35px;
  padding-right: 35px;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`;

const Logo = styled.img``;
