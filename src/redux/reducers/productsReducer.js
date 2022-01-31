import {
  FETCH_PRODUCTS_FROM_NETWORK_SUCCESS,
  ADD_PRODUCT,
  FETCH_PRODUCTS_FROM_CACHE_SUCCESS,
} from "../actions/types";
import { normalizeStateData } from "../../utils/helper";
import { addNewProduct } from "../../utils/helper";

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
    default:
      return state;
  }
};

export default productReducer;
