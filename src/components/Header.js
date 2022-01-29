import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Header = () => {
  return (
    <Wrapper>
      <Logo
        src="/images/logo.png"
        height="50px"
        alt="mpharma-logo"
        data-testid="mpharma-logo"
      />
      <Button type="primary">Add a Drug</Button>
    </Wrapper>
  );
};

export default Header;

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
