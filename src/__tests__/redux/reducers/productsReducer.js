import ProductsReducer from "../../../redux/reducers/productsReducer";
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
import { drugs } from "../../../shared/data";
import { mockState } from "../../../shared/stubs";
import moment from "moment";

describe("tests the products reducer", () => {
  it("is called with the fetch product from network success action", () => {
    const fetchAction = fetchProductsSuccess(drugs.products);
    const state = ProductsReducer({}, fetchAction);

    expect(state.entities.products).toBeDefined();
    expect(state.entities.prices).toBeDefined();
  });

  it("is called with the fetch product from cache success action", () => {
    const fetchAction = fetchProductsFromCache(mockState.inventory);
    const state = ProductsReducer({}, fetchAction);

    expect(state.entities.products).toBeDefined();
    expect(state.entities.prices).toBeDefined();
  });

  it("is called with the add product action", () => {
    const payload = {
      name: "Tramadol",
      price: 20,
      date: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ssZ"),
    };
    const addAction = addProduct(payload);
    const state = ProductsReducer(mockState.inventory, addAction);

    expect(state.entities.products.byId["4"].name).toBe("Tramadol");
    expect(state.entities.products.byId["4"].prices.length).toBe(1);
  });

  it("is called with the edit product action", () => {
    const productInfo = {
      id: 3,
      name: "Tramadol",
      price: 20,
      date: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ssZ"),
    };
    const previousInfo = {
      id: 3,
      name: "Paracetamol 20MG",
      price: 25,
      date: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ssZ"),
    };

    const editInfo = {
      productInfo,
      previousInfo,
    };
    const addAction = editProduct(editInfo);
    const state = ProductsReducer(mockState.inventory, addAction);

    expect(state.entities.products.byId["3"].name).toBe("Tramadol");
    expect(state.entities.prices.byId["7"].price).toBe(20);
  });

  it("is called with the delete product action", () => {
    const productInfo = {
      id: 3,
      name: "Paracetamol 20MG",
    };

    const addAction = deleteProduct(productInfo);
    const state = ProductsReducer(mockState.inventory, addAction);

    expect(state.entities.products.byId["3"]).toBeUndefined();
    expect(state.entities.prices.byId["7"].price).toBeDefined();
  });
});
