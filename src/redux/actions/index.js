import {
  SHOW_MODAL,
  HIDE_MODAL,
  SHOW_FEEDBACK,
  HIDE_FEEDBACK,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  FETCH_PRODUCTS_FROM_NETWORK_SUCCESS,
  FETCH_PRODUCTS_FROM_CACHE_SUCCESS,
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

export const showFeedback = (feedbackInfo) => {
  return {
    type: SHOW_FEEDBACK,
    payload: feedbackInfo,
  };
};

export const hideFeedback = () => {
  return {
    type: HIDE_FEEDBACK,
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
    dispatch(hideFeedback());
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
              showFeedback({
                feedbackType: "error",
                title: "Error Occurred",
                message: "An error occurred while fetching products",
                autoDismiss: false,
                action: {
                  text: "Retry",
                  task: () => dispatch(fetchProductsAsync()),
                },
              })
            );
          });
      }
    });
  };
};
