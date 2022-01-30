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
