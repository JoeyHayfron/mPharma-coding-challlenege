import UIReducer from "../../../redux/reducers/uiReducer";
import {
  showModal,
  hideModal,
  showFeedback,
  hideFeedback,
  showLoader,
  hideLoader,
} from "../../../redux/actions";

describe("tests the ui reducer", () => {
  it("is called with the showModal action", () => {
    const payload = {
      modalType: "add-drug-modal",
      title: "Add Drug",
      action: "Add",
    };
    const showModalAction = showModal(payload);
    const state = UIReducer({}, showModalAction);

    expect(state.showModal).toBe(true);
    expect(state.modalInfo.title).toBe("Add Drug");
  });

  it("is called with the hideModel action", () => {
    const hideModalAction = hideModal();
    const state = UIReducer({}, hideModalAction);

    expect(state.showModal).toBe(false);
  });

  it("is called with the showFeedback action", () => {
    const payload = {
      feedbackType: "error",
      title: "Error Occurred",
      message: "An error occurred while fetching products",
      autoDismiss: false,
      action: {
        text: "Retry",
        task: () => {},
      },
    };
    const showFeedbackAction = showFeedback(payload);
    const state = UIReducer({}, showFeedbackAction);

    expect(state.showFeedback).toBe(true);
    expect(state.feedbackInfo.title).toBe("Error Occurred");
  });

  it("is called with the hideFeedback action", () => {
    const hideFeedbackAction = hideFeedback();
    const state = UIReducer({}, hideFeedbackAction);

    expect(state.showFeedback).toBe(false);
  });
  it("is called with the showLoader action", () => {
    const showLoaderAction = showLoader();
    const state = UIReducer({}, showLoaderAction);

    expect(state.isLoading).toBe(true);
  });
  it("is called with the hideLLoader action", () => {
    const hideLoaderAction = hideLoader();
    const state = UIReducer({}, hideLoaderAction);

    expect(state.isLoading).toBe(false);
  });
});
