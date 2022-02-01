import {
  SHOW_MODAL,
  HIDE_MODAL,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  FETCH_PRODUCTS_FROM_NETWORK_SUCCESS,
  FETCH_PRODUCTS_FROM_CACHE_SUCCESS,
  FETCH_PRODUCTS_FROM_NETWORK_FAILED,
  SHOW_LOADER,
  HIDE_LOADER,
  DELETE_PRODUCT,
} from "./types";
import axios from "axios";
import { cache } from "../../cache";

export const showModal = (modalInfo) => {
  return {
    type: SHOW_MODAL,
    payload: modalInfo,
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};

export const addProduct = (productInfo) => {
  return {
    type: ADD_PRODUCT,
    payload: productInfo,
  };
};

export const editProduct = (productInfo) => {
  return {
    type: EDIT_PRODUCT,
    payload: productInfo,
  };
};

export const deleteProduct = (productInfo) => {
  return {
    type: DELETE_PRODUCT,
    payload: productInfo,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_FROM_NETWORK_SUCCESS,
    payload: products,
  };
};

const fetchProductsFromCache = (products) => {
  return {
    type: FETCH_PRODUCTS_FROM_CACHE_SUCCESS,
    payload: products,
  };
};
export const fetchProductsFailed = (errMsg) => {
  return {
    type: FETCH_PRODUCTS_FROM_NETWORK_FAILED,
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
    cache.getAll().then((data) => {
      if (Object.keys(data).length > 0) {
        dispatch(hideLoader());
        dispatch(fetchProductsFromCache(data.inventory));
      } else {
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
      }
    });
  };
};
