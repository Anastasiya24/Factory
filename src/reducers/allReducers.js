import { combineReducers } from "redux";
import FactoriesReducer from "./factoriesList";
import OrdersReducer from "./ordersList";

const allReducers = combineReducers({
  factories: FactoriesReducer,
  orders: OrdersReducer
});

export default allReducers;
