import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import appReduser from "./appReduser";
import thunk from "redux-thunk";

const store = createStore(
  appReduser,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
