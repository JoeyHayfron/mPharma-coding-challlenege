import {
  HIDE_MODAL,
  SHOW_MODAL,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_FEEDBACK,
  HIDE_FEEDBACK,
} from "../actions/types";

const initialState = {
  showModal: false,
  modalInfo: undefined,
  showFeedback: false,
  feedbackInfo: undefined,
  isLoading: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: true, modalInfo: { ...action.payload } };
    case HIDE_MODAL:
      return {
        ...state,
        showModal: false,
        modalInfo: undefined,
      };
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    case SHOW_FEEDBACK:
      return {
        ...state,
        showFeedback: true,
        feedbackInfo: { ...action.payload },
      };
    case HIDE_FEEDBACK:
      return { ...state, showFeedback: false, feedbackInfo: undefined };
    default:
      return state;
  }
};

export default uiReducer;
