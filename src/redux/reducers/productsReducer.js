import {
  FETCH_PRODUCTS_FROM_NETWORK_SUCCESS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  FETCH_PRODUCTS_FROM_CACHE_SUCCESS,
  DELETE_PRODUCT,
} from "../actions/types";
import {
  normalizeStateData,
  addNewProduct,
  editProduct,
  deleteProduct,
} from "../../utils/helper";

const initialState = {
  entities: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_FROM_NETWORK_SUCCESS:
      return { ...state, entities: { ...normalizeStateData(action.payload) } };
    case FETCH_PRODUCTS_FROM_CACHE_SUCCESS:
      return {
        ...state,
        entities: { ...action.payload.entities },
      };
    case ADD_PRODUCT:
      return {
        ...state,
        entities: { ...addNewProduct(state.entities, action.payload) },
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        entities: {
          ...editProduct(
            state.entities,
            action.payload.productInfo,
            action.payload.previousInfo
          ),
        },
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        entities: { ...deleteProduct(state.entities, action.payload) },
      };
    default:
      return state;
  }
};

export default productReducer;
