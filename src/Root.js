import { Provider } from "react-redux";
import { createStore, applyMiddleWare } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import reducer from "./redux/reducers";
import thunk from "redux-thunk";

const Root = (props) => {
  const store = createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleWare(thunk))
  );
  return <Provider store={store}>{props.children}</Provider>;
};

export default Root;
