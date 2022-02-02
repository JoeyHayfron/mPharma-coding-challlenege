import {
  normalizeStateData,
  findLatestPrice,
  addNewProduct,
  editProduct,
  deleteProduct,
} from "../../utils/helper";
import { drugs } from "../../shared/data";
import { mockState } from "../../shared/stubs";
import moment from "moment";

describe("tests utility functions", () => {
  it("normalizes the data", () => {
    const normalizedData = normalizeStateData(drugs.products);

    expect(normalizedData.products.byId).toBeDefined();
    expect(normalizedData.prices.byId).toBeDefined();
  });

  it("finds the latest price for a product", () => {
    const latestPrice = findLatestPrice(
      mockState.inventory.entities.products.byId["1"].prices,
      mockState.inventory.entities.prices
    );

    expect(latestPrice).toBe("10.99");
  });

  it("adds new drug to the products", () => {
    const payload = {
      name: "Tramadol",
      price: 20,
      date: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ssZ"),
    };
    const updatedEntity = addNewProduct(mockState.inventory.entities, payload);
    expect(updatedEntity.products.byId["4"]).toBeDefined();
  });

  it("edits a product", () => {
    let productInfo = {
      id: 3,
      name: "Tramadol",
      price: 20,
      date: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ssZ"),
    };

    let previousInfo = {
      id: 3,
      name: "Paracetamol 20MG",
      price: 10.99,
    };

    const updatedEntity = editProduct(
      mockState.inventory.entities,
      productInfo,
      previousInfo
    );
    expect(updatedEntity.products.byId["3"].name).toBe("Tramadol");
  });

  it("deletes a product", () => {
    let productInfo = {
      id: 3,
      name: "Tramadol",
    };

    const updatedEntity = deleteProduct(
      mockState.inventory.entities,
      productInfo
    );
    expect(updatedEntity.products.byId["3"]).toBeUndefined();
  });
});
