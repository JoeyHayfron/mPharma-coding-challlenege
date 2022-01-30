import { FETCH_PRODUCTS_SUCCESS } from "../actions/types";
import { normalizeStateData } from "../../utils/helper";

const initialState = {};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return normalizeStateData(action.payload);
    default:
      return state;
  }
};

export default productReducer;
