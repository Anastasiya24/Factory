import { combineReducers } from "redux";
import FactoriesReducer from "./factoriesList";

const allReducers = combineReducers({
  factories: FactoriesReducer
});

export default allReducers;
