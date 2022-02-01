import React, { useEffect } from "react";
import styled from "styled-components";
import { hideFeedback } from "../redux/actions";
import { connect } from "react-redux";

const Feedback = (props) => {
  useEffect(() => {
    if (props.feedbackInfo) {
      if (props.feedbackInfo.autoDismiss) {
        setTimeout(() => props.hideFeedback(), 3000);
      }
    }
  }, [props.feedbackInfo]);
  return (
    <Wrapper showFeedback={props.showFeedback}>
      {props.feedbackInfo ? (
        <Content feedbackType={props.feedbackInfo.feedbackType}>
          <h3 style={{ margin: "0px" }}>{props.feedbackInfo.title}</h3>
          <p>{props.feedbackInfo.message}</p>
          <Retry
            onClick={() =>
              props.feedbackInfo.action ? props.feedbackInfo.action.task() : ""
            }
          >
            {props.feedbackInfo.action ? props.feedbackInfo.action.text : ""}
          </Retry>
        </Content>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    showFeedback: state.ui.showFeedback,
    feedbackInfo: state.ui.feedbackInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideFeedback: () => dispatch(hideFeedback()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

const Wrapper = styled.div`
  width: 82%;
  height: 130px;
  border-radius: 10px;
  box-shadow: 0px 1px 2px 3px rgba(0, 0, 0, 0.1);
  background: white;
  position: fixed;
  bottom: 10px;
  right: 10px;
  overflow: hidden;
  z-index: 300;
  transition: all 0.3s ease-in-out;
  transform: ${(props) =>
    props.showFeedback ? "translateX(0%)" : "translateX(110%)"};

  @media (min-width: 992px) {
    width: 28%;
  }
`;

const Content = styled.div`
  background: ${(props) =>
    props.feedbackType === "error"
      ? "rgba(255, 0, 0, 0.3)"
      : props.feedbackType === "warning"
      ? "rgba(255, 233, 0, 0.3)"
      : "rgba(0, 255, 0, 0.3)"};
  height: 100%;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Retry = styled.div`
  cursor: pointer;
  color: red;
  align-self: flex-end;
  margin-right: 40px;
`;
