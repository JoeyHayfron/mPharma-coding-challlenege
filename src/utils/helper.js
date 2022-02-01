import { normalize } from "normalizr";
import { productsSchema } from "../redux/reducers/schema";
import moment from "moment";

export const normalizeStateData = (payload) => {
  const normalizedData = normalize(payload, [productsSchema]);
  return {
    products: {
      byId: {
        ...normalizedData.entities.products,
      },
      allIds: [...Object.keys(normalizedData.entities.products)],
    },
    prices: {
      byId: { ...normalizedData.entities.prices },
      allIds: [...Object.keys(normalizedData.entities.prices)],
    },
  };
};

export const findLatestPrice = (productPrices, allPrices) => {
  let latestDate = new Date(
    Math.max(...productPrices.map((id) => new Date(allPrices.byId[id].date)))
  );
  latestDate = moment(latestDate).format("YYYY-MM-DDTHH:mm:ssZ");

  let latestPriceId = productPrices.find(
    (id) => allPrices.byId[id].date === latestDate
  );

  return parseFloat(+allPrices.byId[latestPriceId].price).toFixed(2);
};

export const addNewProduct = (entities, productInfo) => {
  const nextProductId =
    parseInt(+entities.products.allIds[entities.products.allIds.length - 1]) +
    1;
  const nextPriceId =
    parseInt(+entities.prices.allIds[entities.prices.allIds.length - 1]) + 1;

  entities.products.byId[nextProductId] = {
    id: nextProductId,
    name: productInfo.name,
    prices: [nextPriceId],
  };
  entities.products.allIds = [
    ...entities.products.allIds,
    nextProductId.toString(),
  ];

  entities.prices.byId[nextPriceId] = {
    id: nextProductId,
    price: productInfo.price,
    date: productInfo.date,
  };
  entities.prices.allIds = [...entities.prices.allIds, nextPriceId.toString()];
  return entities;
};

export const editProduct = (entities, productInfo, previousInfo) => {
  if (
    productInfo.name === previousInfo.name &&
    parseFloat(+productInfo.price).toFixed(2) ===
      parseFloat(+previousInfo.price).toFixed(2)
  ) {
    //Nothing changed
    return entities;
  } else if (
    productInfo.name !== previousInfo.name &&
    parseFloat(+productInfo.price).toFixed(2) ===
      parseFloat(+previousInfo.price).toFixed(2)
  ) {
    //Only name changed
    return changeProductName(entities, productInfo);
  } else if (
    productInfo.name === previousInfo.name &&
    parseFloat(+productInfo.price).toFixed(2) !==
      parseFloat(+previousInfo.price).toFixed(2)
  ) {
    //Only price changed
    return addProductPrice(entities, productInfo);
  } else {
    //Both changed
    return addProductPrice(
      changeProductName(entities, productInfo),
      productInfo
    );
  }
};

export const deleteProduct = (entities, productInfo) => {
  entities.products.allIds = entities.products.allIds.filter(
    (id) => id !== productInfo.id
  );
  delete entities.products.byId[productInfo.id];
  return entities;
};

const addProductPrice = (entities, productInfo) => {
  let products = entities.products;
  let prices = entities.prices;
  const nextPriceId =
    parseInt(+entities.prices.allIds[entities.prices.allIds.length - 1]) + 1;

  prices.byId[nextPriceId] = {
    id: nextPriceId,
    price: productInfo.price,
    date: productInfo.date,
  };
  prices.allIds = [...prices.allIds, nextPriceId.toString()];

  entities.products.byId[productInfo.id].prices = [
    ...products.byId[productInfo.id].prices,
    nextPriceId,
  ];
  return entities;
};

const changeProductName = (entities, productInfo) => {
  let products = entities.products;

  products.byId[productInfo.id].name = productInfo.name;
  return entities;
};
