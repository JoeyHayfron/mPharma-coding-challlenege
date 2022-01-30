import {
  HIDE_MODAL,
  SHOW_ADD_PRODUCT_MODAL,
  SHOW_EDIT_PRODUCT_MODAL,
  SHOW_LOADER,
  HIDE_LOADER,
} from "../actions/types";

const initialState = {
  showModalWrapper: false,
  showAddModal: false,
  showEditModal: false,
  showDeleteModal: false,
  isLoading: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    case SHOW_ADD_PRODUCT_MODAL:
      return { ...state, showModalWrapper: true, showAddModal: true };
    default:
      return state;
  }
};

export default uiReducer;
