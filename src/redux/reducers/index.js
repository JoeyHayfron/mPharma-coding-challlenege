import { combineReducers } from "redux";
import UIReducer from "./uiReducer";
import ProductsReducer from "./productsReducer";
import ErrorsReducer from "./errorsReducer";

const rootReducer = combineReducers({
  ui: UIReducer,
  inventory: ProductsReducer,
  errors: ErrorsReducer,
});

export default rootReducer;
