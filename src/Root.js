import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./redux/reducers";
import thunk from "redux-thunk";

const Root = (props) => {
  const store = createStore(
    reducer,
    props.state ? props.state : {},
    composeWithDevTools(applyMiddleware(thunk))
  );
  return <Provider store={store}>{props.children}</Provider>;
};

export default Root;
