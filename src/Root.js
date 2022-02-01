import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./redux/reducers";
import thunk from "redux-thunk";
import { cache, persistMiddleware } from "./cache";

const Root = (props) => {
  let cachedStore = {};
  cache.getAll().then((data) => {
    cachedStore = data;
  });
  const store = createStore(
    reducer,
    props.state ? props.state : cachedStore,
    composeWithDevTools(applyMiddleware(thunk, persistMiddleware))
  );
  return <Provider store={store}>{props.children}</Provider>;
};

export default Root;
