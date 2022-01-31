import { ADD_PRODUCT, FETCH_PRODUCTS_SUCCESS } from "../redux/actions/types";
import { getConfiguredCache } from "money-clip";
import getPersistMiddleware from "redux-persist-middleware";
import ms from "milliseconds";

const cacheOptions = {
  version: 0.1,
  maxAge: Infinity,
};
export const cache = getConfiguredCache(cacheOptions);

const actionMap = {
  ADD_PRODUCT: ["inventory"],
  FETCH_PRODUCTS_SUCCESS: ["inventory"],
};

export const persistMiddleware = getPersistMiddleware({
  cacheFn: cache.set,
  logger: console.info,
  actionMap,
});
