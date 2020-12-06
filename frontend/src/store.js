import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import data from "./data";

const initalState = {};
const reducer = (state, action) => {
  return { product: data.products };
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initalState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
