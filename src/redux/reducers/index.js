import { combineReducers } from "redux";
import UIReducer from "./uiReducer";
import ProductsReducer from "./productsReducer";

const rootReducer = combineReducers({
  ui: UIReducer,
  entities: ProductsReducer,
});

export default rootReducer;
