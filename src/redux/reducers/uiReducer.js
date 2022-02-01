import {
  HIDE_MODAL,
  SHOW_MODAL,
  SHOW_EDIT_PRODUCT_MODAL,
  SHOW_LOADER,
  HIDE_LOADER,
} from "../actions/types";

const initialState = {
  showModal: false,
  modalInfo: undefined,
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
    default:
      return state;
  }
};

export default uiReducer;
