import {
  SHOW_ADD_PRODUCT_MODAL,
  SHOW_EDIT_PRODUCT_MODAL,
  HIDE_MODAL,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  SHOW_LOADER,
  HIDE_LOADER,
} from "./types";
import axios from "axios";

// export const addProduct = (product) => {
//   return {
//     type: ADD_PRODUCT,
//     payload: product,
//   };
// };

export const showAddProductModal = () => {
  return {
    type: SHOW_ADD_PRODUCT_MODAL,
  };
};

export const hideProductModal = () => {
  return {
    type: HIDE_MODAL,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailed = (errMsg) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: errMsg,
  };
};

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};
export const fetchProductsAsync = () => {
  return (dispatch) => {
    dispatch(showLoader());
    axios
      .get("http://www.mocky.io/v2/5c3e15e63500006e003e9795")
      .then((response) => {
        dispatch(hideLoader());
        dispatch(fetchProductsSuccess(response.data.products));
      })
      .catch((err) => {
        dispatch(hideLoader());
        dispatch(
          fetchProductsFailed("An error occurred while fetching products")
        );
      });
  };
};
