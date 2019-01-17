import { combineReducers } from "redux";
import FactoriesReducer from "./factoriesList";
import OrdersReducer from "./ordersList";
import ProductsReducer from "./productsList";

const allReducers = combineReducers({
  factories: FactoriesReducer,
  orders: OrdersReducer,
  products: ProductsReducer
});

export default allReducers;
