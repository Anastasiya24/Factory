import { combineReducers } from "redux";
import FactoriesReducer from "./factoriesList";
import OrdersReducer from "./ordersList";
import ProductsReducer from "./productsList";
import UserReducer from "./userList";

const allReducers = combineReducers({
  factories: FactoriesReducer,
  orders: OrdersReducer,
  products: ProductsReducer,
  users: UserReducer
});

export default allReducers;
