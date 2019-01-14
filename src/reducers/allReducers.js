import { combineReducers } from "redux";
import FabricReducer from "./fabricList";

const allReducers = combineReducers({
  fabric: FabricReducer
});

export default allReducers;
