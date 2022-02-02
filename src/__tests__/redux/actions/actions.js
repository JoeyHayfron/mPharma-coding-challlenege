import {
  showModal,
  hideModal,
  showFeedback,
  hideFeedback,
  addProduct,
  editProduct,
  deleteProduct,
  fetchProductsSuccess,
  fetchProductsFromCache,
  showLoader,
  hideLoader,
} from "../../../redux/actions";
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
} from "../../../redux/actions/types";
import moment from "moment";
import { data } from "../../../shared/data";
import { mockState } from "../../../shared/stubs";

describe("tests redux action creators", () => {
  it("calls the show modal action creator", () => {
    const payload = {
      modalType: "add-drug-modal",
      title: "Add Drug",
      action: "Add",
    };
    const showModalCreator = showModal(payload);

    expect(showModalCreator.type).toBe(SHOW_MODAL);
    expect(showModalCreator.payload).toBe(payload);
  });
  it("calls the hide modal action creator", () => {
    const hideModalCreator = hideModal();

    expect(hideModalCreator.type).toBe(HIDE_MODAL);
    expect(hideModalCreator.payload).toBeUndefined();
  });

  it("calls the show feedback action creator", () => {
    const payload = {
      feedbackType: "error",
      title: "Error Occurred",
      message: "An error occurred while fetching products",
      autoDismiss: false,
      action: {
        text: "Retry",
        task: () => {},
      },
    };
    const showFeedbackCreator = showFeedback(payload);

    expect(showFeedbackCreator.type).toBe(SHOW_FEEDBACK);
    expect(showFeedbackCreator.payload).toBe(payload);
  });

  it("calls the hide feedback action creator", () => {
    const hideFeedbackCreator = hideFeedback();

    expect(hideFeedbackCreator.type).toBe(HIDE_FEEDBACK);
    expect(hideFeedbackCreator.payload).toBeUndefined();
  });

  it("calls the add product action creator", () => {
    const payload = {
      name: "Tramadol",
      price: parseFloat("20"),
      date: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ssZ"),
    };
    const addProductCreator = addProduct(payload);

    expect(addProductCreator.type).toBe(ADD_PRODUCT);
    expect(addProductCreator.payload).toBe(payload);
  });

  it("calls the edit product action creator", () => {
    const previousInfo = {
      id: 3,
      name: "Paracetamol",
      price: 20,
    };

    const productInfo = {
      id: 3,
      name: "Tramadol",
      price: parseFloat("30"),
      date: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ssZ"),
    };
    const payload = {
      previousInfo,
      productInfo,
    };
    const editProductCreator = editProduct(payload);

    expect(editProductCreator.type).toBe(EDIT_PRODUCT);
    expect(editProductCreator.payload).toBe(payload);
  });

  it("calls the delete product action creator", () => {
    const payload = {
      id: 3,
      name: "John",
    };
    const deleteProductCreator = deleteProduct(payload);

    expect(deleteProductCreator.type).toBe(DELETE_PRODUCT);
    expect(deleteProductCreator.payload).toBe(payload);
  });

  it("calls the fetch products success action creator", () => {
    const fetchProductSuccessCreator = fetchProductsSuccess(data);

    expect(fetchProductSuccessCreator.type).toBe(
      FETCH_PRODUCTS_FROM_NETWORK_SUCCESS
    );
    expect(fetchProductSuccessCreator.payload).toBe(data);
  });

  it("calls the fetch products from cache action creator", () => {
    const fetchProductsFromCacheCreator = fetchProductsFromCache(mockState);

    expect(fetchProductsFromCacheCreator.type).toBe(
      FETCH_PRODUCTS_FROM_CACHE_SUCCESS
    );
    expect(fetchProductsFromCacheCreator.payload).toBe(mockState);
  });

  it("calls the show loader action creator", () => {
    const showLoaderCreator = showLoader();

    expect(showLoaderCreator.type).toBe(SHOW_LOADER);
    expect(showLoaderCreator.payload).toBeUndefined();
  });

  it("calls the hide loader action creator", () => {
    const hideLoaderCreator = hideLoader();

    expect(hideLoaderCreator.type).toBe(HIDE_LOADER);
    expect(hideLoaderCreator.payload).toBeUndefined();
  });
});
