import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "../reducers/allReducers";
import { routerMiddleware } from "react-router-redux";
import history from "./history";

const initialState = {};
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware, routerMiddleware(history)))
);

export default store;
