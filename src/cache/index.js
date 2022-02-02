import {
  ADD_PRODUCT,
  FETCH_PRODUCTS_SUCCESS,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "../redux/actions/types";
import { getConfiguredCache } from "money-clip";
import getPersistMiddleware from "redux-persist-middleware";

const cacheOptions = {
  version: 0.1,
  maxAge: Infinity,
};
export const cache = getConfiguredCache(cacheOptions);

const actionMap = {
  ADD_PRODUCT: ["inventory"],
  FETCH_PRODUCTS_SUCCESS: ["inventory"],
  EDIT_PRODUCT: ["inventory"],
  DELETE_PRODUCT: ["inventory"],
};

export const persistMiddleware = getPersistMiddleware({
  cacheFn: cache.set,
  actionMap,
});
