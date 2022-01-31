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
  const nextProductId = entities.products.allIds.length + 1;
  const nextPriceId = entities.prices.allIds.length + 1;

  entities.products.byId[nextProductId] = {
    id: nextProductId,
    name: productInfo.name,
    prices: [nextPriceId],
  };
  entities.products.allIds = [...entities.products.allIds, nextProductId];

  entities.prices.byId[nextPriceId] = {
    id: nextProductId,
    price: productInfo.price,
    date: productInfo.date,
  };
  entities.prices.allIds = [...entities.prices.allIds, nextPriceId];

  console.log("ENTITIES", entities);
  return entities;
};
