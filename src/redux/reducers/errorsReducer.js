// import { FETCH_PRODUCTS_FROM_NETWORK_FAILED } from "../actions/types";

const initialState = "";

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_PRODUCTS_FROM_NETWORK_FAILED:
    //   return action.payload;
    default:
      return state;
  }
};

export default errorsReducer;
